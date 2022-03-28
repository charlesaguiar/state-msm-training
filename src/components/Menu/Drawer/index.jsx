import { useCallback, useState } from 'react';

import { Box, Drawer as MuiDrawer, Divider } from '@mui/material';

import Avatar from '../Avatar';
import MenuList from './MenuList';

import menu from 'utils/menu';

function Drawer({ open, isMobile, toggleDrawer }) {
	const [selectedMenu, setSelectedMenu] = useState(1);

	const handleMenuSelection = useCallback((value) => {
		setSelectedMenu(value);
		toggleDrawer();
	}, []);

	return (
		<MuiDrawer
			variant={isMobile ? 'temporary' : 'permanent'}
			open={open}
			onClose={toggleDrawer}
			sx={{
				width: 240,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
			}}>
			<Avatar />
			<Divider />
			<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'auto' }}>
				<MenuList
					grow={1}
					menu={menu.filter((m) => !m.bottom)}
					selected={selectedMenu}
					onMenuSelection={handleMenuSelection}
				/>
				<MenuList
					menu={menu.filter((m) => m.bottom)}
					selected={selectedMenu}
					onMenuSelection={handleMenuSelection}
				/>
			</Box>
		</MuiDrawer>
	);
}

export default Drawer;
