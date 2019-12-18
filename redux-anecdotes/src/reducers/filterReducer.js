const initialFilter = null;

export const setFilter = (filter) => {
  return { type: 'SET_FILTER', data: filter };
};

export const resetFilter = () => {
  return { type: 'RESET_FILTER' };
};

const reducer = (state = initialFilter, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.data;
    case 'RESET_FILTER':
      return null;
    default:
      return state;
  }
};

export default reducer;
