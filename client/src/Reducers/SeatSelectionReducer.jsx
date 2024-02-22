import { SELECT_SEAT, DESELECT_SEAT } from '../Actions/SeatSelectionAction';

const initialState = {
  selectedSeats: [] // Initialize selectedSeats with an empty array
};

const seatSelectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload]
      };
    case DESELECT_SEAT:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(seat => seat !== action.payload)
      };
    default:
      return state;
  }
};

export default seatSelectionReducer;
