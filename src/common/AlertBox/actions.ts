import { ERROR_STATE, ErrorAction, SEND_MESSAGE, ErrorClearAction, SEND_SNACKBAR_CLEAR } from "./actionTypes";


export const sendMessage = (message: string, type: ERROR_STATE): ErrorAction => {
	return {
		type: SEND_MESSAGE,
		payload: { message: message, type: type },
	};
};

export const sendSnackbarClear = (): ErrorClearAction => {
	return {
		type: SEND_SNACKBAR_CLEAR,
	};
};
