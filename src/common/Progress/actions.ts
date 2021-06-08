import { SetProgressAction, SET_PROGRESS } from "./actionTypes";

export const setProgress = (progress: boolean): SetProgressAction => {
	return {
		type: SET_PROGRESS,
		payload: progress,
	};
};
