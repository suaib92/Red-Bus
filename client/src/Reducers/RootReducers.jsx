// rootReducer.js
import { combineReducers } from 'redux';
import searchReducer from './SearchReducer'; // Assuming this is the correct path to your searchReducer
import busOptionReducer from './BusOptionReducer'; // Assuming this is the correct path to your busOptionReducer
import seatSelectionReducer from './BusOptionReducer';
const rootReducer = combineReducers({
  search: searchReducer,
  busOptions: busOptionReducer,
  seatSelection: seatSelectionReducer
});

export default rootReducer;
