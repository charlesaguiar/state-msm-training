import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import useAuthStore from 'stores/authStore';

import LocalStorageService from 'services/LocalStorageService';

import Constants from 'utils/constants';

import Toast from 'components/Toast';

import Login from 'pages/public/Login';
import Register from 'pages/public/Register';

import Main from 'pages/private/Main';
import Profile from 'pages/private/Profile';

function App() {
	const user = useAuthStore(useCallback((s) => s.user, []));
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		setLogged(Boolean(LocalStorageService.getItem(Constants.LOGGED_USER_KEY)));
	}, [user]);

	return (
		<BrowserRouter>
			<CssBaseline />
			<Toast />
			{!logged ? (
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="home" element={<span>home</span>} />
						<Route path="profile" element={<Profile />} />
						<Route path="todos" element={<span>todos</span>} />
						<Route path="collection" element={<span>collection</span>} />
						<Route path="whatspopin" element={<span>whatspopin</span>} />
						<Route path="notifications" element={<span>notifications</span>} />
						<Route path="configurations" element={<span>configurations</span>} />
						<Route path="*" element={<Navigate to="/home" />} />
					</Route>
				</Routes>
			)}
		</BrowserRouter>
	);
}

export default App;
