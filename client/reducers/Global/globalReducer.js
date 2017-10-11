export const initialState = {
  lat: 0,
  long: 0
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return Object.assign({}, state);
  }
};

export default globalReducer;
