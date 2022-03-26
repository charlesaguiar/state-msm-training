import { useCallback } from 'react';

import useAuthStore from 'stores/authStore';

import { Avatar as MuiAvatar, Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

function Avatar() {
	const theme = useTheme();

	const loggedUser = useAuthStore(useCallback((s) => s.user, []));
	const logout = useAuthStore(useCallback((s) => s.logout, []));

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: theme.spacing(1),
				margin: theme.spacing(2),
			}}>
			<MuiAvatar
				alt={loggedUser.username}
				src={loggedUser.avatar}
				sx={{ bgcolor: deepPurple[500], width: 80, height: 80 }}>
				{loggedUser.avatar ? '' : loggedUser.username[0].toUpperCase()}
			</MuiAvatar>
			<Button variant="outlined" onClick={logout}>
				Logout
			</Button>
		</Box>
	);
}

export default Avatar;
