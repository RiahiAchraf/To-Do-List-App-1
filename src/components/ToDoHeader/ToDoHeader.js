import React from 'react';
import styled from 'styled-components';

const DivToDoHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-weight: lighter;
  letter-spacing: 0.3rem;
  font-size: 3rem;
  margin: 1.6rem 0 1rem;
`;

const Span = styled.span`
  border-bottom: 1px solid #f7f1f12e;
  padding-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  margin-bottom: 3.1rem;
`;

export const ToDoHeader = () => {
  return (
    <DivToDoHeader>
      <H1>Todo List</H1>
      <Span>Get things done, one item at a time.</Span>
    </DivToDoHeader>
  );
};
