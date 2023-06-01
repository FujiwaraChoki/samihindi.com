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
		id: 0,
		name: 'Miinto 2.0',
		area: 'Development & Entrepreneurship',
		image: 'https://cdn.dribbble.com/users/1858541/screenshots/17394216/media/113b3233d9f61e804377a2aa2488d613.png',
		imageAlt: 'Miinto 2.0 by Oliver Cederborg',
		link: '/project/miinto',
		description: 'Miinto 2.0 is a redesign of the Miinto website. The goal was to create a more modern and user-friendly experience for the users. The project was done in collaboration with Oliver Cederborg.',
	},
	{
		id: 1,
		name: 'BytrixLang',
		area: 'System Programming',
		image: 'https://media.discordapp.net/attachments/843903035239694356/1084157364204220436/Bytrix.png',
		imageAlt: 'Bytrix programming language by Sami Hindi',
		link: '/project/bytrixlang',
		color: '#1D1D26',
		description: 'Bytrix is a programming language that is designed to be easy to learn and use. It is a compiled language that is compiled to x86-64 assembly. The language is designed to be used for system programming, but it can also be used for other purposes.',
		code: 'https://github.com/FujiwaraChoki/BytrixLang',
		demo: 'https://github.com/FujiwaraChoki/BytrixLang/releases/tag/latest_windows'
	},
	{
		id: 2,
		name: 'CloudHaven',
		area: 'Hosting',
		image: 'https://media.discordapp.net/attachments/843903035239694356/1084158165433716736/favicon.png',
		imageAlt: 'CloudHaven by Sami Hindi',
		link: '/project/cloudhaven',
		color: '#E3E3E3',
		description: 'CloudHaven is a hosting website, which allows users to upload files and to share their respective links.',
		code: 'https://github.com/FujiwaraChoki/CloudHaven',
		demo: 'https://cloud-haven.vercel.app/'
	},
]
