import { useCallback } from 'react';

import useMenuStore from 'stores/menuStore';

import { Box, Drawer as MuiDrawer, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Avatar from '../Avatar';
import MenuList from './MenuList';
import Constants from 'utils/constants';

function Drawer() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(Constants.MENU_MOBILE_BREAKPOINT));
	const isDrawerOpen = useMenuStore(useCallback((s) => s.isDrawerOpen, []));
	const toggleDrawer = useMenuStore(useCallback((s) => s.toggleDrawer, []));

	return (
		<MuiDrawer
			variant={isMobile ? 'temporary' : 'permanent'}
			open={isDrawerOpen}
			onClose={toggleDrawer}
			sx={{
				width: 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
			}}>
			<Avatar isMobile={isMobile} />
			<Divider />
			<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
				<MenuList grow={1} />
				<MenuList />
			</Box>
		</MuiDrawer>
	);
}

export default Drawer;
