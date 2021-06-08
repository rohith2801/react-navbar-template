
export const SHOW_POPUP_CONFIRMATION = 'SHOW_POPUP_CONFIRMATION';
export const HANDLE_POPUP_CONFIRMATION = 'HANDLE_POPUP_CONFIRMATION';
export const RESET_POPUP_CONFIRMATION = 'RESET_POPUP_CONFIRMATION';

export interface ShowPopupConfirmationAction {
	type: typeof SHOW_POPUP_CONFIRMATION;
	payload: string;
}
export type Confirmation = 'agree' | 'disagree';
export interface HandlePopupConfirmation {
	type: typeof HANDLE_POPUP_CONFIRMATION;
	payload: Confirmation;
}

export interface ResetPopupConfirmation {
	type: typeof RESET_POPUP_CONFIRMATION;
}
export type PopupAction =
	| ShowPopupConfirmationAction
	| HandlePopupConfirmation
	| ResetPopupConfirmation;