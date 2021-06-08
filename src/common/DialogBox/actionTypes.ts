export const OPEN_DIALOG_BOX = "OPEN_DIALOG_BOX"
export const CLOSE_DIALOG_BOX = "CLOSE_DIALOG_BOX";

export interface OpenDialogBoxAction {
    type: typeof OPEN_DIALOG_BOX
    payload: string | Array<string>
}
export interface CloseDialogBoxAction {
    type: typeof CLOSE_DIALOG_BOX
}

export type DialogBoxAction = OpenDialogBoxAction
| CloseDialogBoxAction;