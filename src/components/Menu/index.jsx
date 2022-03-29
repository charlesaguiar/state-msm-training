import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import AppBar from './AppBar';
import Drawer from './Drawer';

function Menu({ children }) {
	const theme = useTheme();

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar title="Multi Task App" />
			<Drawer />
			<Box component="main" sx={{ flexGrow: 1, p: 3, mt: `${theme.appBarHeight}px` }}>
				{children}
			</Box>
		</Box>
	);
}

export default Menu;
