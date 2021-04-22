import React from 'react';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

import { AddItem } from './components/AddItem/AddItem';
import { ToDoHeader } from './components/ToDoHeader/ToDoHeader';
import { DateTime } from './components/DateTime/DateTime';
import { ToDoItems } from './components/ToDoItems/ToDoItems';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <DateTime />
        <ToDoHeader />
        <ToDoItems />
        <AddItem />
      </div>
    </GlobalProvider>
  );
}

export default App;
