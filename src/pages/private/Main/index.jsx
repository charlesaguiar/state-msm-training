import { Outlet } from 'react-router-dom';

import Menu from 'components/Menu';

function Main() {
	return (
		<Menu>
			<Outlet />
		</Menu>
	);
}

export default Main;
