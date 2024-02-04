import * as React from 'react';
import { Button, Container, TextField } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

const redirectURI = "https%3A%2F%2Fembed.gog.com%2Fon_login_success%3Forigin%3Dclient";
const clientId = "46899977096215655";
const authURL = `https://auth.gog.com/auth?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=code&layout=client2`;

const ImportView = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return <Box
    display="flex"
    justifyContent="center"
    width="100%"
  >
    <Container maxWidth="lg">
      <h1>Import</h1>
      <div>
        <Accordion expanded={expanded === 'fileimport'} onChange={handleChange('fileimport')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>Upload installer files</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'gogimport'} onChange={handleChange('gogimport')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>Import a GOG Library</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ol>
              <li>Login to GOG:<br/><Button href={authURL}>Login</Button></li>
              <li>
                After the login you should be directed to a blank page. Paste the URL (it should start with <code>embed.gog.com</code>) here:<br/>
                <TextField>bla</TextField>
              </li>
              <li>The following games will be imported:</li>
              <></>
            </ol>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  </Box>;
};

export default ImportView;