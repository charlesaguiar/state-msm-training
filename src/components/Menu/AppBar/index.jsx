import React from 'react';

import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MdViewHeadline } from 'react-icons/md';

function AppBar({ title, isMobile }) {
	const theme = useTheme();

	return (
		<MuiAppBar
			position="fixed"
			sx={{
				width: isMobile ? '100%' : `calc(100% - ${theme.drawerWidth}px)`,
				ml: isMobile ? 0 : `${theme.drawerWidth}px`,
				height: `${theme.appBarHeight}px`,
			}}>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				{isMobile && (
					<IconButton>
						<MdViewHeadline size={30} color="white" />
					</IconButton>
				)}
				<Typography variant="h6" noWrap component="div">
					{title}
				</Typography>
			</Toolbar>
		</MuiAppBar>
	);
}

export default AppBar;