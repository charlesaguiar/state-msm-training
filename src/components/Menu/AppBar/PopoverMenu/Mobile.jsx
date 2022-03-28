import { useCallback } from 'react';

import useAuthStore from 'stores/authStore';

import { Box, Typography } from '@mui/material';
import { MdLogout } from 'react-icons/md';

function MobilePopoverMenu() {
	const loggedUser = useAuthStore(useCallback((s) => s.user, []));
	const logout = useAuthStore(useCallback((s) => s.logout, []));

	const iconBox = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		padding: '8px 0',
		cursor: 'pointer',
		width: '100%',
		'&:hover': {
			borderRadius: 1,
			backgroundColor: '#e0e0e0',
			opacity: [0.9, 0.8, 0.7],
		},
	};

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}>
			<Typography variant="caption">{loggedUser.email}</Typography>
			<Box sx={iconBox} onClick={logout}>
				<MdLogout size={16} />
				<Typography variant="caption" ml={1}>
					Logout
				</Typography>
			</Box>
		</Box>
	);
}

export default MobilePopoverMenu;
