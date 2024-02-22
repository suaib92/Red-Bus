// actions.js
export const UPDATE_SELECTED_SEATS = 'UPDATE_SELECTED_SEATS';

export const updateSelectedSeats = (seats) => {
  return {
    type: UPDATE_SELECTED_SEATS,
    payload: seats
  };
};
