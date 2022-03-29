import { useCallback, useEffect } from 'react';
import useToastStore from 'stores/toastStore';

const useToast = (visible, options) => {
	const show = useToastStore(useCallback((s) => s.show, []));
	const hide = useToastStore(useCallback((s) => s.hide, []));

	useEffect(() => {
		if (visible) {
			show({ ...options });
		} else {
			hide();
		}
	}, [visible, options]);
};

export default useToast;
