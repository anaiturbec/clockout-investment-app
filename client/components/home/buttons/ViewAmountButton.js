import React from 'react';
import styled from 'styled-components/native';
import { NotEyeIcon, EyeIcon } from '../../../assets/icons';

export default function ViewAmountButton({ viewAmount, setViewAmount }) {
  return (
    <Button onPress={() => setViewAmount(!viewAmount)}>
      {viewAmount ? (
        <NotEyeIcon color="#A7A7A7" width={25} height={25} />
      ) : (
        <EyeIcon color="#A7A7A7" width={25} height={25} />
      )}
    </Button>
  );
}

const Button = styled.Pressable`
  width: 35px;
  height: 35px;
  border-radius: 100px;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
`;
