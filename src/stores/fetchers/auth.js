import AuthService from 'services/AuthService';

export const login = async (set, username, password) => {
	set(() => ({ loading: true }));
	try {
		const { user, success } = await AuthService.login(username, password);
		set(() => ({ loading: false, user, logged: true, error: null, success }));
	} catch (error) {
		set(() => ({ loading: false, error, user: null, logged: false, success: false }));
	}
};

export const logout = async (set) => {
	set(() => ({ loading: true }));
	AuthService.logout();
	set(() => ({ loading: false, user: null, error: null }));
};
