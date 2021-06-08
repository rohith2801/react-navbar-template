// Progress bar
export const SET_PROGRESS = 'SET_PROGRESS';

export interface SetProgressAction {
	type: typeof SET_PROGRESS;
	payload: boolean;
}