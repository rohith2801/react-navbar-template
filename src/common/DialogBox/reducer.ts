import { CLOSE_DIALOG_BOX, DialogBoxAction, OPEN_DIALOG_BOX } from "./actionTypes"

export interface DialogStore {
    visible: boolean,
    message: string | Array<string>
}

export const initialDialogState:DialogStore = {
    visible:false,
    message:""
}

export const dialogReducer = (state:DialogStore = initialDialogState,action:DialogBoxAction) => {
    switch(action.type) {
        case OPEN_DIALOG_BOX: 
            return {
                ...state,
                message: action.payload,
                visible: true
            }
        case CLOSE_DIALOG_BOX: {
            return {
                ...state,
                visible: false,
                message: ""
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
