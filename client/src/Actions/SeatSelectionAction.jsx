// actions.js
export const SELECT_SEAT = 'SELECT_SEAT';
export const DESELECT_SEAT = 'DESELECT_SEAT';

export const selectSeat = (seatId) => {
  return {
    type: SELECT_SEAT,
    payload: seatId
  };
};

export const deselectSeat = (seatId) => {
  return {
    type: DESELECT_SEAT,
    payload: seatId
  };
};
