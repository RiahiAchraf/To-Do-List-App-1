import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// Initianl State

const InitinalState = {
  todo: [
    { id: 1, label: 'Learn ReactJs' },
    { id: 2, label: 'Learn Gatsby' },
    { id: 3, label: 'Learn NextJs' },
  ],
};

// Global Context

export const GlobalContext = createContext(InitinalState);

// Component Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitinalState);

  // Actions
  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      playload: id,
    });
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      playload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todo: state.todo,
        deleteItem,
        addItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
