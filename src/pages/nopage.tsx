import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NoPageView = () => {
  return <Box
    display="flex"
    justifyContent="center"
    width="100%"
    alignItems="center"
    sx={{flexGrow: 1}}
  >
    <Typography variant="h1">Page Not Found</Typography>
  </Box>;
};

export default NoPageView;