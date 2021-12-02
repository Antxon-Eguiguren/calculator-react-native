import {SchemeState} from './SchemeContext';

type SchemeAction = {
  type: 'setScheme';
  payload: 'dark' | 'light';
};

export const schemeReducer = (
  state: SchemeState,
  action: SchemeAction,
): SchemeState => {
  switch (action.type) {
    case 'setScheme':
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};
