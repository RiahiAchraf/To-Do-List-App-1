import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';
import { Item } from '../Item/Item';

export const ToDoItems = () => {
  const { todo } = useContext(GlobalContext);

  return (
    <div>
      {todo.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
