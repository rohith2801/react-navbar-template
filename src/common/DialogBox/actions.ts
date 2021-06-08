import {OPEN_DIALOG_BOX,CLOSE_DIALOG_BOX,OpenDialogBoxAction,CloseDialogBoxAction} from './actionTypes';

export const openDialogBox = (message:string | Array<string>):OpenDialogBoxAction => {
    return {
        type: OPEN_DIALOG_BOX,
        payload: message
    }
}

export const closeDialogBox = ():CloseDialogBoxAction => {
    return {
        type: CLOSE_DIALOG_BOX
    }
}