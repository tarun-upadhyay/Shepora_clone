export const Reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        return [...state, action.payload];
      }
      case "REMOVE_FROM_CART": {
        const cartAfterRemoval = state.filter((el) => el.id !== action.payload);
        return cartAfterRemoval;
      }
      case "CHECKOUT":{
          return [];
      }
      default: {
          return state;
      }
    }
  };
  