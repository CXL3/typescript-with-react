import React, { createContext, useContext, useReducer,
  useEffect } from 'react';

//2.2
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// 2. describe the  value
// it has the cart object with item array
interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}
// 3. describe the initial value
// The cart value is empty initially
const defaultStateValue: AppStateValue = {
  cart: {
    items: [],
  },
};

//1.create context to sharing the state value , this context will keep the value of the state.
// 4. It requires an initial value, so I pass the state object to the context
export const AppStateContext = createContext(defaultStateValue);

//Part 2: 6.create context to share the setState
//8. to describe the value of the context, we can use a generic type parameter
// Previous---export const AppSetStateContext = createContext<
//   React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
// >(undefined);

//2.5 
export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

//2.1 describe a generic action
interface Action<T> {
  type: T;
}
//2.2 extends our generic action interface 
interface AddToCartAction extends Action<'ADD_TO_CART'> {
  payload: {
    //remove the quantity from the Cartitem, the quantity is handled by the reducer.
    item: Omit<CartItem, 'quantity'>;
  };
}
//2.1
const reducer = (state: AppStateValue, action: AddToCartAction) => {
  if (action.type === 'ADD_TO_CART') {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );
    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  }


  return state;
};
// Previous export const useSetState = () => {
//   const setState = useContext(AppSetStateContext);

//   if (!setState) {
//     throw new Error(
//       'useSetState was called outside of the AppSetStateContext provider'
//     );
//   }
//   return setState;
// };


export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);
  if (!dispatch) {
    throw new Error(
      'useStateDispatch was called outside of the AppDispatchContext provider'
    );
  }
  return dispatch;
};

// 5. create the state that will share this state with the Provider
// functional component
// wrap appState component tree in the state context provider component
const AppStateProvider: React.FC = ({ children }) => {


  //useState hook , state value , function, need initial value
  // const [state, setState] = useState(defaultStateValue);

  const [state, dispatch] = useReducer(reducer, defaultStateValue);
  


  return (
    <AppStateContext.Provider value={state}>
      {/* //pass the set State */}
      {/* Previous- <AppSetStateContext.Provider value={setState}> */}
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
