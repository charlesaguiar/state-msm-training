import UserService from 'services/UserService';

export const fetchAllUsers = async (set) => {
	set(() => ({ loading: true }));
	try {
		const { data } = await UserService.getAllUsers();
		set(() => ({ loading: false, data }));
	} catch (error) {
		set(() => ({ loading: false, error, data: [] }));
	}
};

export const fetchUserByUsername = async (set, username) => {
	set(() => ({ loading: true }));
	try {
		const { data } = await UserService.getUserByUsername(username);
		set(() => ({ loading: false, data }));
	} catch (error) {
		set(() => ({ loading: false, error, data: [] }));
	}
};

export const createUser = async (set, user) => {
	set(() => ({ loading: true }));
	try {
		await UserService.createUser(user);
		set(() => ({ loading: false, success: true }));
	} catch (error) {
		set(() => ({ loading: false, error, success: false }));
	}
};
