import { useCallback, useState } from 'react';

import useAuthStore from 'stores/authStore';
import useToast from 'hooks/useToast';
import { useNavigate } from 'react-router-dom';

import { Box, Stack, TextField, InputAdornment, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdAccountCircle, MdLock } from 'react-icons/md';

import ToastOptions from 'utils/toast';

import { container, form, stack, caption } from './styles';

function Login() {
	const navigate = useNavigate();

	const login = useAuthStore(useCallback((s) => s.login, []));
	const loading = useAuthStore(useCallback((s) => s.loading, []));
	const error = useAuthStore(useCallback((s) => s.error, []));

	useToast(error, { ...ToastOptions.getErrorToastOptions(error?.message) });

	const [credentials, setCredentials] = useState({ username: '', password: '' });

	const handleChange = useCallback(
		(field, value) => {
			setCredentials((prev) => ({ ...prev, [field]: value }));
		},
		[setCredentials],
	);

	const submitLogin = useCallback(async () => {
		await login(credentials.username, credentials.password);
		navigate('/');
	}, [credentials]);

	return (
		<Box sx={container}>
			<Box sx={form}>
				<Typography variant="h6" mb={2}>
					Login
				</Typography>

				<Stack gap={2} sx={stack}>
					<TextField
						id="username"
						variant="filled"
						value={credentials.username}
						onChange={(e) => handleChange('username', e.target.value)}
						label="username"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<MdAccountCircle />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						id="password"
						variant="filled"
						type="password"
						value={credentials.password}
						onChange={(e) => handleChange('password', e.target.value)}
						label="password"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<MdLock />
								</InputAdornment>
							),
						}}
					/>
					<LoadingButton loading={loading} variant="contained" onClick={submitLogin}>
						Login
					</LoadingButton>
				</Stack>
				<Typography variant="caption">
					Does not have an account?{' '}
					<Typography
						variant="caption"
						color="primary.main"
						sx={caption}
						onClick={() => navigate('/register')}>
						Signup here!
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
}

export default Login;
