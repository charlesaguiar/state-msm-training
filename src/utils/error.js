export const hasError = (e) => {
	if (!e) {
		return false;
	}

	if (e instanceof Error) {
		return true;
	}

	if (Array.isArray(e) || e instanceof String) {
		return e.length > 0;
	}

	if (e instanceof Object) {
		return Object.keys(e).length > 0;
	}

	return Boolean(e);
};
