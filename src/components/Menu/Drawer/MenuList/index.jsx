import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

function MenuList({ grow = 0, menu, selected, setSelected }) {
	const theme = useTheme();
	const navigate = useNavigate();

	const navigateTo = useCallback((id, path) => {
		setSelected(id);
		navigate(path);
	}, []);

	return (
		<List sx={{ flexGrow: grow }}>
			{menu.map((menuItem) => (
				<ListItem
					button
					key={menuItem.title}
					onClick={() => navigateTo(menuItem.id, menuItem.path)}>
					<ListItemIcon>
						{menuItem.icon({
							color: selected === menuItem.id ? theme.palette.primary.light : 'black',
						})}
					</ListItemIcon>
					<ListItemText
						primary={menuItem.title}
						primaryTypographyProps={{
							fontWeight:
								selected === menuItem.id
									? theme.typography.fontWeightBold
									: theme.typography.fontWeightRegular,
							color: selected === menuItem.id ? theme.palette.primary.light : 'black',
						}}
					/>
				</ListItem>
			))}
		</List>
	);
}

export default MenuList;
