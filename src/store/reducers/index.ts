import { combineReducers } from "redux";
import TemplateReducer from "../../components/generate/reducer";
import CatalogReducer from "../../components/catalog/reducer";
import { progressReducer } from "../../common/Progress/reducer";
import { errorHandlerReducer } from "../../common/AlertBox/reducer";
import { popupReducer } from "../../common/AssertionPopup/reducer";
import { dialogReducer } from "../../common/DialogBox/reducer";
const reducers: any = {
  errorHandler: errorHandlerReducer,
  catalog: CatalogReducer,
  template: TemplateReducer,
  progress: progressReducer,
  popup: popupReducer,
  dialog: dialogReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
