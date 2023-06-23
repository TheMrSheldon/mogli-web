import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import GameView from "./pages/game";
import HomeView from "./pages/home";
import NoPageView from "./pages/nopage";
import UserView from "./pages/user";
import LibraryView from "./pages/library";
import SettingsView from "./pages/settings"
import SideBar, { DrawerHeader } from './components/sidebar';
import AppBar from './components/appbar'

import theme from "./theme"

export default function App() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenu = () => { };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <BrowserRouter>
          <AppBar position="fixed" title="[MyTitle]" onDrawerOpen={handleDrawerOpen} onAccountOpen={handleMenu} />
          <SideBar open={open} onClose={handleDrawerClose} />
          <Box id="container" width="100vw" minHeight="100vh" sx={{ display: 'flex', flexFlow: 'column' }}>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="games" element={<LibraryView />} />
              <Route path="settings" element={<SettingsView />} />
              <Route path="users/:id" element={<UserView />} />
              <Route path="games/:id" element={<GameView />} />
              <Route path="*" element={<NoPageView />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();