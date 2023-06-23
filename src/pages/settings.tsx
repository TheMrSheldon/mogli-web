import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const AccountSettings = () => {
  return <Container fixed disableGutters={true}>
    <Typography variant="h4" noWrap component="div">Account Settings</Typography>

  </Container>
}

const ServerSettings = () => {
  return <Typography variant="h4" noWrap component="div">Server Settings</Typography>
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const settings: [string, any][] = [["Account", AccountSettings], ["Server", ServerSettings]];

const SettingsView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <Box
    justifyContent="center"
    width="100%"
    display="flex"
    sx={{ flexGrow: 1 }}
  >
    <Box maxWidth="lg" display="grid" sx={{ flexGrow: 1, gridTemplateAreas: "'content tabs'", gridTemplateColumns: "1fr max-content" }}>
      <Container sx={{ gridArea: "content" }}>
        {settings.map(([name, func], index) => (
          <TabPanel value={value} index={index} key={`settings_${name}_content`} >
            {func()}
          </TabPanel>
        ))}
      </Container>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{ borderLeft: 1, borderColor: 'divider', gridArea: "tabs" }}
        TabIndicatorProps={{ sx: { left: 0 } }}
      >
        {settings.map(([name, func], index) => (
          <Tab label={<Typography variant="h5">{name}</Typography>} key={`settings_${name}_tab`} sx={{ alignItems: "end" }} />
        ))}
      </Tabs>
    </Box>
  </Box>
};

export default SettingsView;