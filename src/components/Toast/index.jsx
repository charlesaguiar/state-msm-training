import { useCallback } from 'react';

import useToastStore from 'stores/toastStore';

import { Alert, AlertTitle, Snackbar } from '@mui/material';

function Toast() {
	const { visible, title, message, severity, variant, duration, hide } = useToastStore(
		useCallback((s) => s, []),
	);

	return (
		<Snackbar open={visible} autoHideDuration={duration} onClose={hide}>
			<Alert onClose={hide} severity={severity} variant={variant} sx={{ width: '100%' }}>
				<AlertTitle>{title}</AlertTitle>
				{message}
			</Alert>
		</Snackbar>
	);
}

export default Toast;
