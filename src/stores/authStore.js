import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { login, logout } from './fetchers/auth';

const INITIAL_STATE = {
	user: null,
	logged: false,
	loading: false,
	success: false,
	error: null,
};

const useAuthStore = create(
	persist(
		devtools((set) => ({
			...INITIAL_STATE,
			login: (username, password) => login(set, username, password),
			logout: () => logout(set),
		})),
	),
	{
		name: 'auth-storage',
	},
);

export default useAuthStore;
