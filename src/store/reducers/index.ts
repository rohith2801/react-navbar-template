import { combineReducers } from "redux";
import TemplateReducer from "../../components/generate/reducer";
import CatalogReducer from "../../components/catalog/reducer";

const reducers: any = {
    catalog: CatalogReducer,
    template: TemplateReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
