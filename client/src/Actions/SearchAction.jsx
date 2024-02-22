// SearchAction.js

export const setFromLocation = (location) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_FROM_LOCATION',
      payload: location
    });
  };
};

export const setToLocation = (location) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_TO_LOCATION',
      payload: location
    });
  };
};

export const setSelectedDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SELECTED_DATE',
      payload: date
    });
  };
};
