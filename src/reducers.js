import { combineReducers } from 'redux';
import mainReducer from './components/Main/reducer'
import catalogReducer from './components/Catalog/reducer'

export default combineReducers({
    main: mainReducer,
    catalog: catalogReducer,
}); 
