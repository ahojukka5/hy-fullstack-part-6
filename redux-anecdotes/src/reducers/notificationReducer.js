const initialNotificationMessage = null;

export const setNotification = (message, timeout = 5) => async (dispatch) => {
  dispatch({ type: 'SET_NOTIFICATION', data: message });
  await setTimeout(() => dispatch(resetNotification()), timeout * 1000);
};

export const resetNotification = () => {
  return { type: 'RESET_NOTIFICATION' };
};

const reducer = (state = initialNotificationMessage, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data;
    case 'RESET_NOTIFICATION':
      return null;
    default:
      return state;
  }
};

export default reducer;
