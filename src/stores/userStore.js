import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { fetchAllUsers, fetchUserByUsername, createUser } from './fetchers/user';

const INITIAL_STATE = {
	data: null,
	loading: false,
	error: null,
	success: false,
};

const store = (set) => ({
	...INITIAL_STATE,
	fetchAllUsers: () => fetchAllUsers(set),
	fetchUserByUsername: (username) => fetchUserByUsername(set, username),
	create: (user) => createUser(set, user),
});

const useUserStore = create(devtools(store));

export default useUserStore;
