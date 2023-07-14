import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import type { GameInfo } from '../../rest/dto/gameinfo'
import { useGetGamesQuery } from '../../rest/apiSlice';

interface GameCardProps {
	gameinfo: GameInfo
}

function GameCard(props: GameCardProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={props.gameinfo.media.logo}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{props.gameinfo.title}
					</Typography>
					<Box overflow="hidden" whiteSpace="nowrap">
						{props.gameinfo.tags.map((text, index) => (
							<Chip label={text} size="small" key={`${props.gameinfo.id}_tag_${text}`}/>
						))}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}


const LibraryView = () => {
	const {
		data: games,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetGamesQuery()

	let content
	if (isLoading) {
		content = <>
			Loading... {process.env.API_ENDPOINT}
		</>
	} else if (isSuccess) {
		content = games.map((game, index) => (
			<Grid item xs={3} key={game.id}>
				<Link to={`/games/${game.id}`} style={{ textDecoration: 'none' }}>
					<GameCard gameinfo={game} />
				</Link>
			</Grid>
		))
	} else if (isError) {
		content = <div>Error: {JSON.stringify(error)}</div>
	}
	return <Box
		display="flex"
		justifyContent="center"
		width="100%"
	>
		<Container maxWidth="lg">
			<h1>Library</h1>
			<Grid
				container
				rowSpacing={{ xs: 1, sm: 2, md: 3 }}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				columns={{xs: 3, sm: 6, md: 9, lg: 12}}
			>
				{content}
			</Grid>
		</Container>
	</Box>;
};

export default LibraryView;