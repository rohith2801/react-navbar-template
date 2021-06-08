import React from "react";
import { useDispatch } from "react-redux";
import * as dialogActions from '../../common/DialogBox/actions'

const ViewAll = () => {

  const dispatch = useDispatch();

  return <>View all
  <button onClick={()=>dispatch(dialogActions.openDialogBox('Confirm delete'))}>Click</button>
  </>;
};

export default ViewAll;
