import React from 'react';
import { useAuth, hasAuthParams } from "react-oidc-context"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import GameView from "./features/game/view";
import HomeView from "./features/home/view";
import NoPageView from "./features/nopage/view";
import UserView from "./features/user/view";
import LibraryView from "./features/library/view";
import SettingsView from "./features/settings/view"
import SideBar, { DrawerHeader } from './components/sidebar';
import AppBar from './components/appbar'
import { apiSlice } from './rest/apiSlice'

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

  const auth = useAuth();

  // automatically sign-in
  React.useEffect(() => {
      if (!hasAuthParams() &&
          !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading) {
          auth.signinRedirect();
      }
  }, [auth.isAuthenticated, auth.activeNavigator, auth.isLoading, auth.signinRedirect]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ApiProvider api={apiSlice}>
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
      </ApiProvider>
    </Box>
  );
}