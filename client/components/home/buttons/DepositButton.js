import React from 'react';
import styled from 'styled-components/native';

export default function DepositButton() {
  return (
    <Button>
      <Title>+{'  '}Deposit</Title>
    </Button>
  );
}

const Button = styled.Pressable`
  border-radius: 100px;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 30px;
  height: 40px;
`;

const Title = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: 600;
`;
