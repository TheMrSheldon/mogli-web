import React from 'react'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
	children: React.ReactElement;
}

function ElevationScroll(props: Props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}


interface AppBarProps extends MuiAppBarProps {
	onDrawerOpen: () => void,
	onAccountOpen: () => void,
	title: string
}

const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
	const { onDrawerOpen, onAccountOpen, title, ...appBarProps } = props;
	return (
		<ElevationScroll {...props}>
			<MuiAppBar {...appBarProps} elevation={0}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={props.onDrawerOpen}
						edge="start"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div" mr="10pt">
						Mogli
					</Typography>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						{/*props.title*/}
					</Typography>

					<div>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={props.onAccountOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</MuiAppBar>
		</ElevationScroll>
	);
}

export default AppBar;