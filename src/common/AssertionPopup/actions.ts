import { ShowPopupConfirmationAction, SHOW_POPUP_CONFIRMATION, Confirmation, HandlePopupConfirmation, HANDLE_POPUP_CONFIRMATION, ResetPopupConfirmation, RESET_POPUP_CONFIRMATION } from "./actionTypes";

	

export const showPopup = (message: string): ShowPopupConfirmationAction => {
	return {
		type: SHOW_POPUP_CONFIRMATION,
		payload: message,
	};
};

export const handlePopup = (response: Confirmation): HandlePopupConfirmation => {
	return {
		type: HANDLE_POPUP_CONFIRMATION,
		payload: response,
	};
};

export const resetPopup = (): ResetPopupConfirmation => {
	return {
		type: RESET_POPUP_CONFIRMATION,
	};
};
