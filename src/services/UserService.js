import api from '../config/api';

const getUserByUsername = async (username) => {
	const {
		data: [user],
	} = await api.get(`/users?username=${username}`);

	return user;
};

const getAllUsers = async () => api.get('/users');

const createUser = async (user) => api.post('/users', { ...user });

const isUsernameAlreadyTaken = async (username) => {
	const user = await getUserByUsername(username);
	return Boolean(user);
};

const UserService = {
	getAllUsers,
	getUserByUsername,
	createUser,
	isUsernameAlreadyTaken,
};

export default UserService;
