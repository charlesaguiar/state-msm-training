const getErrorToastOptions = (message) => ({
	title: 'Error',
	message,
	severity: 'error',
	variant: 'outlined',
});

const getSuccessToastOptions = (message) => ({
	title: 'Success',
	message,
	severity: 'success',
	variant: 'outlined',
});

const getWarningToastOptions = (message) => ({
	title: 'Warning',
	message,
	severity: 'warning',
	variant: 'outlined',
});

const getInfoToastOptions = (message) => ({
	title: 'Info',
	message,
	severity: 'info',
	variant: 'outlined',
});

const ToastOptions = {
	getErrorToastOptions,
	getSuccessToastOptions,
	getWarningToastOptions,
	getInfoToastOptions,
};

export default ToastOptions;
