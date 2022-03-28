import { useCallback, useState } from 'react';
import useAuthStore from 'stores/authStore';
import useUserStore from 'stores/userStore';
import useToast from 'hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';

import UserService from 'services/UserService';

import {
	Autocomplete,
	Box,
	CircularProgress,
	Stack,
	TextField,
	InputAdornment,
	Typography,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { MdAccountCircle, MdLock, MdEmail, MdMarkEmailRead } from 'react-icons/md';

import Constants from 'utils/constants';
import Messages from 'utils/messages';
import ToastOptions from 'utils/toast';
import { hasError } from 'utils/error';

import { container, form, stack, caption } from './styles';

function Register() {
	const navigate = useNavigate();

	const [usernameAlreadyTaken, setUsernameAlreadyTaken] = useState({
		result: false,
		loading: false,
	});

	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
		getValues,
	} = useForm({ defaultValues: { gender: 'female' } });

	const { create, loading, success, error } = useUserStore(useCallback((s) => s, []));

	const login = useAuthStore(useCallback((s) => s.login, []));
	const loadingAuth = useAuthStore(useCallback((s) => s.loading, []));

	useToast(success, { ...ToastOptions.getSuccessToastOptions('User registred with sucess!') });
	useToast(hasError(error), { ...ToastOptions.getErrorToastOptions(error?.message) });

	const onSubmitValidNewUser = useCallback(async (user) => {
		await create({ ...user });
		await login(user.username, user.password);
		navigate('/');
	}, []);

	const validateUsername = async () => {
		setUsernameAlreadyTaken((prev) => ({ ...prev, loading: true }));
		const result = await UserService.isUsernameAlreadyTaken(getValues('username'));
		setUsernameAlreadyTaken((prev) => ({ ...prev, result, loading: false }));
	};

	const getUsernameHelperText = () => {
		if (usernameAlreadyTaken.result) {
			return Messages.errors.register.usernameAlreadyTaken;
		}

		if (errors.username) {
			return Messages.errors.register.username;
		}

		return null;
	};

	return (
		<Box sx={container}>
			<Box sx={form}>
				<Typography variant="h6" mb={2}>
					Register
				</Typography>

				<Stack gap={2} sx={stack}>
					<TextField
						id="username"
						variant="filled"
						label="username"
						inputProps={{
							onBlur: validateUsername,
						}}
						required
						{...register('username', {
							required: getUsernameHelperText(),
							validate: () => !usernameAlreadyTaken.result,
						})}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<MdAccountCircle />
								</InputAdornment>
							),
							endAdornment: usernameAlreadyTaken.loading && (
								<InputAdornment position="end">
									<CircularProgress size={30} />
								</InputAdornment>
							),
						}}
						error={errors.username || usernameAlreadyTaken.result}
						helperText={getUsernameHelperText()}
					/>
					<Stack gap={2} direction="row">
						<TextField
							id="email"
							variant="filled"
							label="e-mail"
							type="email"
							required
							{...register('email', { required: true })}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<MdEmail />
									</InputAdornment>
								),
							}}
							error={errors.email}
							helperText={errors.email && Messages.errors.register.email}
						/>
						<TextField
							id="email-confirmation"
							variant="filled"
							label="confirm e-mail"
							type="email"
							required
							{...register('emailConfirmation', {
								required: true,
								validate: (v) => v === getValues('email'),
							})}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<MdMarkEmailRead />
									</InputAdornment>
								),
							}}
							error={errors.emailConfirmation}
							helperText={errors.emailConfirmation && Messages.errors.register.emailConfirmation}
						/>
					</Stack>
					<TextField
						id="password"
						variant="filled"
						type="password"
						label="password"
						required
						{...register('password', { required: true })}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<MdLock />
								</InputAdornment>
							),
						}}
						error={errors.password}
						helperText={errors.password && Messages.errors.register.password}
					/>
					<Stack gap={0}>
						<FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
						<Controller
							rules={{ required: true }}
							control={control}
							name="gender"
							render={({ field }) => (
								<RadioGroup {...field} row>
									<FormControlLabel value="female" control={<Radio />} label="Female" />
									<FormControlLabel value="male" control={<Radio />} label="Male" />
									<FormControlLabel value="other" control={<Radio />} label="Other" />
								</RadioGroup>
							)}
						/>
					</Stack>

					<Controller
						rules={{ required: true }}
						control={control}
						name="occupation"
						render={(props) => (
							<Autocomplete
								id="disable-close-on-select"
								options={Constants.OCCUPATIONS}
								getOptionLabel={(opt) => opt.label}
								onChange={(_, data) => props.field.onChange(data)}
								renderInput={(params) => (
									<TextField
										{...params}
										label="occupation"
										variant="filled"
										error={errors.occupation}
										helperText={errors.occupation && Messages.errors.register.occupation}
									/>
								)}
							/>
						)}
					/>

					<LoadingButton
						loading={loading || loadingAuth}
						variant="contained"
						onClick={handleSubmit(onSubmitValidNewUser)}>
						Register
					</LoadingButton>
				</Stack>

				<Typography variant="caption">
					Already have an account?{' '}
					<Typography
						variant="caption"
						color="primary.main"
						sx={caption}
						onClick={() => navigate('/login')}>
						Signin here!
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
}

export default Register;
