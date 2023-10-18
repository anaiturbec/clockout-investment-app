import React from 'react';
import styled from 'styled-components/native';

export default function NavButton({ name, icon, selected, onPress }) {
  const Name = styled.Text`
    font-size: 13px;
    color: ${selected ? '#49DE7E' : '#646464'};
  `;
  return (
    <Button onPress={onPress}>
      {icon}
      <Name>{name}</Name>
    </Button>
  );
}

const Button = styled.Pressable`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
