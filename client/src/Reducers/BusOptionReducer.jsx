import { SELECT_SEAT, DESELECT_SEAT } from "../Actions/BusOptionAction"

const initialState = {
  selectedSeats: [],
  availableSeats: Array.from({ length: 19 }, (_, index) => ({ id: `UA${index + 1}` }))
};

const busOptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SEAT:
      return {
        ...state,
        selectedSeats: [...state.selectedSeats, action.payload],
        availableSeats: state.availableSeats.filter(seat => seat.id !== action.payload)
      };
    case DESELECT_SEAT:
      return {
        ...state,
        selectedSeats: state.selectedSeats.filter(seat => seat !== action.payload),
        availableSeats: [...state.availableSeats, { id: action.payload }]
      };
    default:
      return state;
  }
};

export default busOptionsReducer;
