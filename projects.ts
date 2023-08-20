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
		image: 'https://i.imgur.com/2kPpFJR.jpg',
		imageAlt: 'Bytrix programming language by Sami Hindi',
		link: '/project/bytrixlang',
		color: '#1D1D26',
		description: 'Bytrix is a programming language that is designed to be easy to learn and use. It is a compiled language that is compiled to x86-64 assembly. The language is designed to be used for system programming, but it can also be used for other purposes.',
		code: 'https://github.com/FujiwaraChoki/BytrixLang',
		demo: 'https://github.com/FujiwaraChoki/BytrixLang/releases/tag/latest_windows'
	},
	{
		id: 2,
		name: 'Omni-GPT',
		area: 'Artificial Intelligence',
		image: 'https://github.com/FujiwaraChoki/Omni-GPT/raw/main/assets/banner.png',
		imageAlt: 'Omni-GPT by Sami Hindi',
		link: '/project/omni-gpt',
		color: '#E3E3E3',
		description: 'Omni-GPT can take input from the user and generate a static HTML-Website, or even ones using a certain framework, like Next.js or Vue.js.',
		code: 'https://github.com/FujiwaraChoki/Omni-GPT',
		demo: '#'
	},
	{
		id: 3,
		name: 'CogniLabs',
		area: 'Desktop Application',
		image: 'https://assets.whop.com/cdn-cgi/image/width=640/https://assets.whop.com/images/images/48702.original.png?1691940379',
		imageAlt: 'CogniLabs by Sami Hindi',
		link: '/project/cognilabs',
		demo: 'https://whop.com/sealsage/',
		description: 'CogniLabs is a desktop application that is designed to help students learn and study. It is designed to be easy to use and intuitive to the user.',
		code: 'https://github.com/FujiwaraChoki/Cogni-Labs',
	}
]
