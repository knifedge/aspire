export const initialState = {
  user: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'STORE_USER':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'SET_SPEND_LIMIT':
      return {
        ...state,
        user: {
          ...state.user,
          spendLimit: action.payload,
        },
      };
    default:
      return state;
  }
};
