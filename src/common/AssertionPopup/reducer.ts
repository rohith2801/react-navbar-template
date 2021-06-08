import { Confirmation, HANDLE_POPUP_CONFIRMATION, PopupAction, RESET_POPUP_CONFIRMATION, SHOW_POPUP_CONFIRMATION } from "./actionTypes";


export interface PopupDetailsStore {
	message: string;
	open: boolean;
	confirmation: Confirmation;
}
const initialState: PopupDetailsStore = {
	message: '',
	open: false,
	confirmation: 'disagree',
};
export const popupReducer = (
	state = initialState,
	action: PopupAction,
): PopupDetailsStore => {
	switch (action.type) {
		case SHOW_POPUP_CONFIRMATION: {
			return {
				...state,
				message: action.payload,
				open: true,
				confirmation: 'disagree',
			};
		}
		case HANDLE_POPUP_CONFIRMATION: {
			return {
				...state,
				message: '',
				open: false,
				confirmation: action.payload,
			};
		}
		case RESET_POPUP_CONFIRMATION: {
			return { ...state, ...initialState };
		}

		default: {
			return {
				...state,
			};
		}
	}
};
