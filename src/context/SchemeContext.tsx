import React, {createContext, useReducer} from 'react';
import {schemeReducer} from './SchemeReducer';

export interface SchemeState {
  theme: 'light' | 'dark';
}

export const schemeInitialState: SchemeState = {
  theme: 'dark',
};

export interface SchemeContextProps {
  scheme: SchemeState;
  setScheme: (theme: 'dark' | 'light') => void;
}

export const SchemeContext = createContext({} as SchemeContextProps);

export const SchemeProvider = ({children}: any) => {
  const [scheme, dispatch] = useReducer(schemeReducer, schemeInitialState);

  const setScheme = (theme: 'light' | 'dark') => {
    dispatch({
      type: 'setScheme',
      payload: theme,
    });
  };

  return (
    <SchemeContext.Provider value={{scheme, setScheme}}>
      {children}
    </SchemeContext.Provider>
  );
};
