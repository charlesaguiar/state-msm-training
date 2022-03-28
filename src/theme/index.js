import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	MuiInputBase: {
		styleOverrides: {
			input: {
				'&:-webkit-autofill': {
					transitionDelay: '9999s',
					transitionProperty: 'background-color, color',
				},
			},
		},
	},
	drawerWidth: 240,
	appBarHeight: 60,
});

export default theme;
