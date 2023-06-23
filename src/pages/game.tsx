import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from "@mui/system";

import GameInfo from "../dto/gameinfo"

const BannerImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'game',
})<{ game: GameInfo }>(({ theme, game }) => ({
  backgroundImage: `linear-gradient(to top, #202020 0%, transparent 50%), url(${game.media.banner})`,
  height: "50vh",
  width: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  boxShadow: "inset 0pt -50pt 100pt -100pt black",
}))

interface GameInfoViewProps {
  game: GameInfo,
};

const boxartHeight = "300pt"

const BoxartImage = styled("img")(({ theme }) => ({
  height: boxartHeight,
}))


const GameInfoView = (props: GameInfoViewProps) => {
  return <Box maxWidth="lg" mt={`calc(-${boxartHeight}/2)`} display="grid" sx={{ gridTemplateAreas: "'boxart title' 'boxart tags'", gridTemplateColumns: "max-content 1fr", gridTemplateRows: "1fr 1fr", gridGap: "10pt" }}>
    <BoxartImage src={props.game.media.boxart} sx={{ gridArea: "boxart", boxShadow: "0pt 0pt 10pt #101010" }} />
    <Box alignSelf="end">
      <Typography variant="h3" noWrap component="div" sx={{ gridArea: "title" }}>
        {props.game.title}
      </Typography>
    </Box>
    <Box sx={{ gridArea: "tags" }}>
      {props.game.tags.map((text, index) => (
        <Chip label={text} key={`${props.game.id}_tag_${text}`} />
      ))}
    </Box>
  </Box>
}

const GameView = () => {
  const Game1: GameInfo = {
    id: "0001",
    title: "Bridge Constructor Portal",
    media: {
      icon: "https://images.gog-statics.com/fdc07ba978c2779ef49a3f2afddad153fd324528dcf1d68b5cf1375d76e1c17e.jpg",
      logo: "https://images.gog-statics.com/de38c015ddce2e1b782d4669bb200eca18d196b4f12f510876221364b13cb6f5_product_tile_extended_432x243.webp",
      boxart: "https://images.gog-statics.com/f8e4091ba9644e98c1b34e4d6df315ce824ed9994b1efa7dd2decf9a99c69fdd.jpg",
      banner: "https://images.gog-statics.com/83a7a2d77817e87baf015400729c71e99d4c2c27ed8cfd55258608d16c806bef.jpg",
    },
    tags: ["Science", "Puzzle", "Funny", "Sandbox", "Sci-fi", "Difficult", "Physics", "Education", "LevelEditor"],
    description: `This is a description`,
  }
  return <Box>
    <BannerImage game={Game1} />
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Container maxWidth="lg">
        <GameInfoView game={Game1} />
        <Typography variant="body2" color="text.secondary">
          {Game1.description}
        </Typography>
      </Container>
    </Box>
  </Box>
};

export default GameView;