/* eslint-disable react/no-danger */
import type { FC } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useFetcher } from 'remix'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
const themes: Array<Theme> = Object.values(Theme)

const ThemeContext = createContext<{
  theme: Theme | undefined
  toggleTheme: () => void
}>({
  theme: Theme.LIGHT,
  toggleTheme: () => {},
})
ThemeContext.displayName = 'ThemeContext'

const prefersLightMQ = '(prefers-color-scheme: light)'
export const getPreferredTheme = () =>
  window.matchMedia(prefersLightMQ).matches ? Theme.LIGHT : Theme.DARK

export const ThemeProvider: FC<{ specifiedTheme: Theme | null }> = ({
  specifiedTheme,
  children,
}) => {
  const [theme, setTheme] = useState<Theme | undefined>(() => {
    if (specifiedTheme && themes.includes(specifiedTheme)) return specifiedTheme

    if (typeof window !== 'object') return undefined

    return getPreferredTheme()
  })

  const toggleTheme = useCallback(
    () => (theme === Theme.DARK ? setTheme(Theme.LIGHT) : setTheme(Theme.DARK)),
    [theme]
  )

  const persistTheme = useFetcher()
  const persistThemeRef = useRef(persistTheme)

  useEffect(() => {
    persistThemeRef.current = persistTheme
  }, [persistTheme])

  const mountRun = useRef(false)

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true
      return
    }
    if (!theme) return

    persistThemeRef.current.submit({ theme }, { action: 'action/toggle-theme', method: 'post' })
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ)
    const handleChange = () => {
      setTheme(mediaQuery.matches ? Theme.LIGHT : Theme.DARK)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

const clientThemeCode = `
// hi there dear reader 👋
// this is how I make certain we avoid a flash of the wrong theme. If you select
// a theme, then I'll know what you want in the future and you'll not see this
// script anymore.
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersLightMQ)}).matches
    ? 'light'
    : 'dark';

  const cl = document.documentElement.classList;

  const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
  if (themeAlreadyApplied) {
    // this script shouldn't exist if the theme is already applied!
    console.warn(
      "Hi there, could you let Kent know you're seeing this message? Thanks!",
    );
  } else {
    cl.add(theme);
  }

  // the <dark-mode> and <light-mode> approach won't work for meta tags,
  // so we have to do it manually.
  const meta = document.querySelector('meta[name=color-scheme]');
  if (meta) {
    if (theme === 'dark') {
      meta.content = 'dark light';
    } else if (theme === 'light') {
      meta.content = 'light dark';
    }
  } else {
    console.warn(
      "Heya, could you let Kent know you're seeing this message? Thanks!",
    );
  }
})();
`
export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}

export function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  const { theme } = useTheme()
  return (
    <>
      {/*
			On the server, "theme" might be `null`, so clientThemeCode ensures that
			this is correct before hydration.
		 */}
      <meta name='color-scheme' content={theme === 'light' ? 'light' : 'dark'} />
      {/* // eslint-disable-next-line react/no-danger */}
      {ssrTheme ? undefined : <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />}
    </>
  )
}

export function isTheme(value: unknown): value is Theme {
  return typeof value === 'string' && themes.includes(value as Theme)
}
