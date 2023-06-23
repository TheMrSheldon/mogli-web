export interface GameInfoMedia {
	icon: string,
	logo: string,
	boxart: string,
	banner: string,
}

export default interface GameInfo {
	id: string,
	title: string,
	media: GameInfoMedia,
	tags: string[],
	description: string,
}