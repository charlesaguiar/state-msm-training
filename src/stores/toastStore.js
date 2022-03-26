import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { show, hide } from './handlers/toast';

const INITIAL_STATE = {
	visible: false,
	title: 'Title',
	message: 'Message',
	severity: 'success',
	variant: 'outlined',
	duration: 5000,
};

const useToastStore = create(
	devtools((set) => ({
		...INITIAL_STATE,
		show: (options) => show(set, options),
		hide: () => hide(set),
	})),
);

export default useToastStore;
