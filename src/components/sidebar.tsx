import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';

import RouterLink from './routerlink';

const drawerWidth = 240;

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

interface SideBarProps {
	open: boolean,
	onClose: () => void
}

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="temporary"
			anchor="left"
			open={props.open}
			onClose={props.onClose}
		>
			<List>
				<RouterLink to="/games" text="Library" icon={<AccountBalanceIcon />} />
				<Divider />
				<RouterLink to="/users/my-id-here" text="Account" icon={<PersonIcon />} />
				<RouterLink to="/settings" text="Settings" icon={<SettingsIcon />} />
				<RouterLink to="this-dos-not-make-sense" text="Logout" icon={<LogoutIcon />} />
			</List>
		</Drawer>
	);
}
export default SideBar;