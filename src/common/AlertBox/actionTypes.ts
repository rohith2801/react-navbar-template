
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_SNACKBAR_CLEAR = 'SEND_SNACKBAR_CLEAR';
export type ERROR_STATE = 'success' | 'warning' | 'error' | '';

export interface ErrorMessage {
	message: string;
	type: ERROR_STATE;
}

export interface ErrorAction {
	type: typeof SEND_MESSAGE;
	payload: ErrorMessage;
}

export interface ErrorClearAction {
	type: typeof SEND_SNACKBAR_CLEAR;
}

export type ErrorHandlingAction = ErrorAction | ErrorClearAction;