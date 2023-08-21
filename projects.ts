export type Project = {
	id: number
	name: string
	area: string
	link: string
	image: string
	imageAlt: string
	color?: string,
	description?: string,
	code?: string,
	demo?: string,
}

export const projects: Project[] = [
	{
		id: 1,
		name: 'BytrixLang',
		area: 'System Programming',
		link: '/project/bytrixlang',
		image: 'https://i.imgur.com/2kPpFJR.jpg',
		imageAlt: 'Bytrix programming language by Sami Hindi',
		color: '#1D1D26',
		description: 'Bytrix is a programming language that is designed to be easy to learn and use. It is a compiled language that is compiled to x86-64 assembly. The language is designed to be used for system programming, but it can also be used for other purposes.',
		code: 'https://github.com/FujiwaraChoki/BytrixLang',
		demo: 'https://github.com/FujiwaraChoki/BytrixLang/releases/tag/latest_windows'
	},
	{
		id: 2,
		name: 'Omni-GPT',
		area: 'Artificial Intelligence',
		link: '/project/omni-gpt',
		image: 'https://github.com/FujiwaraChoki/Omni-GPT/raw/main/assets/banner.png',
		imageAlt: 'Omni-GPT by Sami Hindi',
		color: '#E3E3E3',
		description: 'Omni-GPT can take input from the user and generate a static HTML-Website, or even ones using a certain framework, like Next.js or Vue.js.',
		code: 'https://github.com/FujiwaraChoki/Omni-GPT',
		demo: 'https://example-gilt.vercel.app'
	},
	{
		id: 3,
		name: 'ForceUrSelf',
		area: 'Hacking Tool',
		link: '/project/forceurself',
		image: 'https://i.imgur.com/czK7mM2.png',
		imageAlt: 'ForceUrSelf by Sami Hindi',
		color: '#FCBA03',
		description: 'ForceUrSelf is a Bruteforcing Tool written in Python. It features CLI-Arguments, Tor Proxies and much more!',
		demo: 'https://github.com/FujiwaraChoki/ForceUrSelf/#examples',
		code: 'https://github.com/FujiwaraChoki/ForceUrSelf',
	}
]
