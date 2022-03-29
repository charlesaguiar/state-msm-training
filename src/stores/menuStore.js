import create from 'zustand';
import { devtools } from 'zustand/middleware';

import menu from 'utils/menu';

const INITIAL_STATE = {
	menu,
	selectedMenuItem: -1,
	isDrawerOpen: false,
};

const useMenuStore = create(
	devtools((set) => ({
		...INITIAL_STATE,
		selectMenuItem: (id) => set(() => ({ selectedMenuItem: id })),
		toggleDrawer: () => set((s) => ({ isDrawerOpen: !s.isDrawerOpen })),
	})),
);

export default useMenuStore;
