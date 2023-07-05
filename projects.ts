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
		name: 'NexusAI',
		area: 'Artificial Intelligence',
		image: 'https://i.imgur.com/d9ULtCa.png',
		imageAlt: 'NexusAI by Sami Hindi',
		link: '/project/nexusai',
		color: '#E3E3E3',
		description: 'An LLM (Language Learning Model) empowered with NLP (Natural Language Processing) capabilities, developed using the NLTK (Natural Language Toolkit) framework using Python.',
		code: 'https://github.com/FujiwaraChoki/NexusAI',
		demo: '#'
	},
	{
		id: 3,
		name: 'Inkwell',
		area: 'Desktop Application',
		imageAlt: 'Inkwell by Sami Hindi',
		image: 'https://i.imgur.com/MdFm9jU.png',
		demo: 'https://github.com/FujiwaraChoki/Inkwell/releases/tag/latest',
		link: 'https://github.com/FujiwaraChoki/Inkwell',
	}
]
