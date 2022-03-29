import { useCallback } from 'react';

import useAuthStore from 'stores/authStore';

import { Avatar as MuiAvatar, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

import useMediaQuery from '@mui/material/useMediaQuery';

import MobilePopoverMenu from 'components/Menu/AppBar/PopoverMenu/Mobile';
import Constants from 'utils/constants';

function Avatar() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(Constants.MENU_MOBILE_BREAKPOINT));
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
			{isMobile && <MobilePopoverMenu />}
		</Box>
	);
}

export default Avatar;
