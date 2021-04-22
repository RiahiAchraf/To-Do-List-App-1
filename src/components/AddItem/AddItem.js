import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

import { GlobalContext } from '../../context/GlobalState';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

const Label = styled.label`
  font-weight: lighter;
  min-width: 100%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex-grow: 1;
  width: 73%;
  color: #555;
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  letter-spacing: 0.08rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  margin-left: 2%;
  width: 25%;
  border: 1px solid #fff;
  background-color: #f36366;
  color: #fff;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    background: #f34448;
  }
`;

export const AddItem = () => {
  const [text, setText] = useState('');

  const { addItem } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const NewItem = {
      id: uuid(),
      label: text,
    };

    return addItem(NewItem);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Label>Add to the todo list</Label>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add..."
      />
      <Button>Add item</Button>
    </Form>
  );
};
