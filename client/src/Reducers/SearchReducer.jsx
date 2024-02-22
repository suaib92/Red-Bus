// searchReducer.js

const initialState = {
  statesAndDistricts: [],
  fromLocation: { state: '', district: '' },
  toLocation: { state: '', district: '' },
  selectedDate: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STATES_AND_DISTRICTS':
      return {
        ...state,
        statesAndDistricts: action.payload
      };
    case 'SET_FROM_LOCATION':
      return {
        ...state,
        fromLocation: action.payload
      };
    case 'SET_TO_LOCATION':
      return {
        ...state,
        toLocation: action.payload
      };
    case 'SET_SELECTED_DATE':
      return {
        ...state,
        selectedDate: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
