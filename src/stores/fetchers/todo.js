import TodoService from 'services/TodoService';

export const fetchAllTodos = async (set) => {
	set(() => ({ loading: true }));
	try {
		const { data } = await TodoService.getAllTodos();
		set(() => ({ loading: false, data }));
	} catch (error) {
		set(() => ({ loading: false, error, data: [] }));
	}
};

export const createTodo = async (set, todo) => {
	set(() => ({ loading: true }));
	try {
		await TodoService.createTodo(todo);
		const { data } = await TodoService.getAllTodos();
		set(() => ({ loading: false, data }));
	} catch (error) {
		set(() => ({ loading: false, error, data: [] }));
	}
};
