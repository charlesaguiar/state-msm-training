import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { fetchAllTodos, createTodo } from './fetchers/todo';

const INITIAL_STATE = {
	data: [],
	loading: false,
	error: null,
};

const useTodoStore = create(
	devtools((set) => ({
		...INITIAL_STATE,
		fetchAll: () => fetchAllTodos(set),
		create: (todo) => createTodo(set, todo),
	})),
);

export default useTodoStore;
