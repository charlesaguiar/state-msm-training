import { useCallback, useState } from 'react';

import useAuthStore from 'stores/authStore';

import { Box, Container, Divider, Popover, Typography } from '@mui/material';
import { MdAccountCircle, MdArrowDropDown, MdCircleNotifications, MdLogout } from 'react-icons/md';

function PopoverMenu() {
	const loggedUser = useAuthStore(useCallback((s) => s.user, []));
	const logout = useAuthStore(useCallback((s) => s.logout, []));

	const [anchor, setAnchor] = useState(null);

	const handleClick = useCallback((event) => {
		setAnchor(event.currentTarget);
	}, []);

	const handleClose = useCallback(() => {
		setAnchor(null);
	}, []);

	const open = Boolean(anchor);
	const id = open ? 'simple-popover' : undefined;

	const iconBox = {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: 'primary.light',
			opacity: [0.9, 0.8, 0.7],
			color: 'white',
		},
	};

	return (
		<div>
			<Container
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					cursor: 'pointer',
				}}
				onClick={handleClick}>
				<Typography mr={1}>{loggedUser.username}</Typography>
				<MdArrowDropDown size={28} />
			</Container>
			<Popover
				id={id}
				open={open}
				anchorEl={anchor}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}>
				<Box>
					<Typography p={2}>{loggedUser.email}</Typography>
					<Divider />
					<Box p={2} sx={iconBox}>
						<MdAccountCircle size={24} />
						<Typography ml={1}>My Account</Typography>
					</Box>
					<Box p={2} sx={iconBox}>
						<MdCircleNotifications size={24} />
						<Typography ml={1}>Notifications</Typography>
					</Box>
					<Box p={2} sx={iconBox} onClick={logout}>
						<MdLogout size={24} />
						<Typography ml={1}>Logout</Typography>
					</Box>
				</Box>
			</Popover>
		</div>
	);
}

export default PopoverMenu;
