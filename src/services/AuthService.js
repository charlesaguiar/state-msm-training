import UserService from './UserService';
import LocalStorageService from './LocalStorageService';

import Constants from 'utils/constants';

const login = async (username, password) => {
	const loggedUser = LocalStorageService.getItem(Constants.LOGGED_USER_KEY);
	if (loggedUser) {
		return {
			success: true,
			code: 200,
			user: { ...loggedUser },
		};
	}

	const user = await UserService.getUserByUsername(username);

	if (!user) {
		throw new Error('User does not exist');
	}

	if (user.password !== password) {
		throw new Error('Wrong password');
	}

	LocalStorageService.setItem(Constants.LOGGED_USER_KEY, user);

	return {
		success: true,
		code: 200,
		user: { ...user },
	};
};

const logout = () => {
	LocalStorageService.removeItem(Constants.LOGGED_USER_KEY);
	window.location.reload(false);
};

const AuthService = {
	login,
	logout,
};

export default AuthService;
