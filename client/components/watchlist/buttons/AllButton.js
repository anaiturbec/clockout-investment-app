import React from 'react';
import styled from 'styled-components/native';
import { ArrowIcon } from '../../../assets/icons';

export default function AllButton() {
  return (
    <Button>
      <Text>All</Text>
      <ArrowIcon width={20} height={20} color="#8f8f8f" />
    </Button>
  );
}

const Button = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const Text = styled.Text`
  font-size: 16px;
  color: #8f8f8f;
  font-weight: 600;
`;
