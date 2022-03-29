import { useCallback } from 'react';

import useMenuStore from 'stores/menuStore';

import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { MdViewHeadline } from 'react-icons/md';

import DesktopPopoverMenu from '../AppBar/PopoverMenu/Desktop';
import Constants from 'utils/constants';

function AppBar({ title }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(Constants.MENU_MOBILE_BREAKPOINT));
	const toggleDrawer = useMenuStore(useCallback((s) => s.toggleDrawer, []));

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

				{!isMobile && <DesktopPopoverMenu />}
			</Toolbar>
		</MuiAppBar>
	);
}

export default AppBar;
