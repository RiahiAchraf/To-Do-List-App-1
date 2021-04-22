import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { FaTrash } from 'react-icons/fa';

import { GlobalContext } from '../../context/GlobalState';

// Styling
const LI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1.2rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Span = styled.span`
  cursor: pointer;
  text-decoration: ${(props) => props.decoration || 'normal'};
`;

// Actionss

export const Item = ({ item }) => {
  const [isActive, setActive] = useState('false');
  const { deleteItem } = useContext(GlobalContext);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const style = {
    marginTop: '3px',
    fontSize: '1.3rem',
    color: '#fff',
  };

  return (
    <LI>
      <Span
        decoration={isActive ? null : 'line-through'}
        onClick={handleToggle}
      >
        {item.label}
      </Span>
      <Div>
        <Button onClick={() => deleteItem(item.id)}>
          <FaTrash style={style} />
        </Button>
      </Div>
    </LI>
  );
};
