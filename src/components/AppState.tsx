import React, { createContext, useState, useContext } from 'react';

// 2. describe the  value
// it has the cart object with item array
interface AppStateValue {
  cart: {
    items: { id: number; name: string; price: number; quantity: number }[];
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

export const AppSetStateContext = createContext<
  React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error(
      'useSetState was called outside of the AppSetStateContext provider'
    );
  }
  return setState;
};

// 5. create the state that will share this state with the Provider
// functional component
// wrap appState component tree in the state context provider component
const AppStateProvider: React.FC = ({ children }) => {
  //useState hook , state value , function, need initial value
  const [state, setState] = useState(defaultStateValue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
