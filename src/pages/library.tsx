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

import GameInfo from '../dto/gameinfo'

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
	const Game1 : GameInfo = {
		id: "0001",
		title: "[Game 1]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game2 : GameInfo = {
		id: "0002",
		title: "[Game 2]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game3 : GameInfo = {
		id: "0003",
		title: "[Game 3]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game4 : GameInfo = {
		id: "0004",
		title: "[Game 4]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game5 : GameInfo = {
		id: "0005",
		title: "[Game 5]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game6 : GameInfo = {
		id: "0006",
		title: "[Game 6]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
	}
	const Game7 : GameInfo = {
		id: "0007",
		title: "[Game 7]",
		media: {
			icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
			logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
			boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
			banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
		},
		tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
		description: `This is a description`,
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
				{[Game1, Game2, Game3, Game4, Game5, Game6, Game7].map((game, index) => (
					<Grid item xs={3} key={game.id}>
						<Link to={`/games/${game.id}`} style={{ textDecoration: 'none' }}>
							<GameCard gameinfo={game} />
						</Link>
					</Grid>
				))}
			</Grid>
		</Container>
	</Box>;
};

export default LibraryView;