import { useCallback, useState } from 'react';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import AppBar from './AppBar';
import Drawer from './Drawer';

function Menu({ children }) {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = useCallback(() => {
		setOpenDrawer((prev) => !prev);
	}, []);

	console.log({ openDrawer });

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar title="Multi Task App" isMobile={isMobile} toggleDrawer={toggleDrawer} />
			<Drawer isMobile={isMobile} open={openDrawer} toggleDrawer={toggleDrawer} />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: `${theme.appBarHeight}px` }}>
				{children}
			</Box>
		</Box>
	);
}

export default Menu;
