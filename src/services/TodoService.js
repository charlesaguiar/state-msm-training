import api from '../config/api';

const getAllTodos = async () => api.get('/todos');

const createTodo = async (todo) => api.post('/todos', { ...todo });

const TodoService = {
	getAllTodos,
	createTodo,
};

export default TodoService;
