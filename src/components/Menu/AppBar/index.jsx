import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MdViewHeadline } from 'react-icons/md';

import PopoverMenu from '../AppBar/PopoverMenu';

function AppBar({ title, isMobile, toggleDrawer }) {
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
					<IconButton onClick={toggleDrawer}>
						<MdViewHeadline size={30} color="white" />
					</IconButton>
				)}
				<Typography variant="h6" noWrap component="div">
					{title}
				</Typography>

				<PopoverMenu />
			</Toolbar>
		</MuiAppBar>
	);
}

export default AppBar;
