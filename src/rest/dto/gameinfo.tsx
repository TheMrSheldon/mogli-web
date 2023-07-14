export type GameInfoMedia = {
	icon: string,
	logo: string,
	boxart: string,
	banner: string,
}

export type GameInfo = {
	id: string,
	title: string,
	media: GameInfoMedia,
	tags: string[],
	description: string,
}