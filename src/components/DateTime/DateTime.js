import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const H4 = styled.h4`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1.6rem;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  display: flex;
  flex-direction: column;
`;

export const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <H4>{`${dateTime.toLocaleDateString()} | ${dateTime.toLocaleTimeString()}`}</H4>
  );
};
