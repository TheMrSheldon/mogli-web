import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { styled } from "@mui/system";

import type { GameInfo } from "../../rest/dto/gameinfo";
import { useGetGameQuery } from '../../rest/apiSlice';
import { useParams } from 'react-router-dom';

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
  let { id } = useParams();

  const {
		data: game,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetGameQuery(id as string)

	let content
	if (isLoading) {
		content = <>
			Loading...
		</>
	} else if (isSuccess) {
		content = <>
      <BannerImage game={game} />
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
      >
        <Container maxWidth="lg">
        <GameInfoView game={game} />
        <Typography variant="body2" color="text.secondary">
          {game.description}
        </Typography>
        </Container>
      </Box>
    </>
	} else if (isError) {
		content = <div>Error: {JSON.stringify(error)}</div>
	}
  return <Box>
    {content}
  </Box>
};

export default GameView;