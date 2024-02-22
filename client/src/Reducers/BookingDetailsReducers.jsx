// reducer.js
import { UPDATE_SELECTED_SEATS } from '../Actions/BookingDetailsAction';

const initialState = {
  selectedSeats: []
};

const seatSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_SEATS:
      return {
        ...state,
        selectedSeats: action.payload
      };
    default:
      return state;
  }
};

export default seatSelectionReducer;
