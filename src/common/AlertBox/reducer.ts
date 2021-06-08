import { ErrorHandlingAction, ERROR_STATE, SEND_MESSAGE, SEND_SNACKBAR_CLEAR } from "./actionTypes";

export interface ErrorHandlerStore {
	message: string;
	type: ERROR_STATE;
	open: boolean;
}
const initialState: ErrorHandlerStore = {
	message: '',
	type: 'warning',
	open: false,
};
export const errorHandlerReducer = (
	state = initialState,
	action: ErrorHandlingAction,
): ErrorHandlerStore => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return {
				...state,
				type: action.payload.type,
				message: action.payload.message,
				open: true,
			};
		}
		case SEND_SNACKBAR_CLEAR: {
			return {
				...state,
				type: '',
				message: '',
				open: false,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};
