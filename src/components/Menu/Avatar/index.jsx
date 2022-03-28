import { useCallback } from 'react';

import useAuthStore from 'stores/authStore';

import { Avatar as MuiAvatar, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

function Avatar() {
	const theme = useTheme();
	const loggedUser = useAuthStore(useCallback((s) => s.user, []));

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
			<Typography sx={{ fontWeight: 'bold' }}>{loggedUser.username}</Typography>
		</Box>
	);
}

export default Avatar;
