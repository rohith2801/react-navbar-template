import { SetProgressAction, SET_PROGRESS } from "./actionTypes";

export interface ProgressStore {
	loading: boolean;
}
const initialState: ProgressStore = {
	loading: false,
};
export const progressReducer = (state = initialState, action: SetProgressAction) => {
	switch (action.type) {
		case SET_PROGRESS: {
			return {
				...state,
				loading: action.payload,
			};
		}

		default: {
			return {
				...state,
			};
		}
	}
};
