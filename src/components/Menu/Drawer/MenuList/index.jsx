import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import useMenuStore from 'stores/menuStore';

import { useTheme } from '@mui/material/styles';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function MenuList({ grow = 0 }) {
	const theme = useTheme();
	const navigate = useNavigate();

	const menu = useMenuStore(useCallback((s) => s.menu, []));
	const selectedMenuItem = useMenuStore(useCallback((s) => s.selectedMenuItem, []));
	const selectMenuItem = useMenuStore(useCallback((s) => s.selectMenuItem, []));

	const navigateTo = useCallback((id, path) => {
		selectMenuItem(id);
		navigate(path);
	}, []);

	return (
		<List sx={{ flexGrow: grow }}>
			{menu
				.filter((m) => Boolean(m.bottom) !== Boolean(grow))
				.map((menuItem) => (
					<ListItem
						button
						key={menuItem.title}
						onClick={() => navigateTo(menuItem.id, menuItem.path)}>
						<ListItemIcon>
							{menuItem.icon({
								color: selectedMenuItem === menuItem.id ? theme.palette.primary.light : 'black',
							})}
						</ListItemIcon>
						<ListItemText
							primary={menuItem.title}
							primaryTypographyProps={{
								fontWeight:
									selectedMenuItem === menuItem.id
										? theme.typography.fontWeightBold
										: theme.typography.fontWeightRegular,
								color: selectedMenuItem === menuItem.id ? theme.palette.primary.light : 'black',
							}}
						/>
					</ListItem>
				))}
		</List>
	);
}

export default MenuList;
