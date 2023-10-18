import React from 'react';
import styled from 'styled-components/native';
import { DeclineIcon, GrowthIcon } from '../../assets/icons';

export default function Stock({
  icon,
  name,
  code,
  price,
  difference,
  percentage,
}) {
  const Text = styled.Text`
    font-size: 12px;
    color: ${difference < 0 ? '#A52020' : '#1d7a34'};
    font-weight: 500;
  `;

  return (
    <Container>
      <RowContainer>
        {icon}
        <ColumnContainer>
          <Code>{code}</Code>
          <Name>{name}</Name>
        </ColumnContainer>
      </RowContainer>
      <RightColumnContainer>
        <Code>${price}</Code>
        <RightRowContainer>
          {difference < 0 ? (
            <DeclineIcon width={16} height={16} color="#A52020" />
          ) : (
            <GrowthIcon width={20} height={20} color="#1D7A34" />
          )}
          <Text>
            {difference > 0 ? '+' : null}
            {difference.toFixed(2)} ({percentage?.toFixed(2)}%)
          </Text>
        </RightRowContainer>
      </RightColumnContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 15px;
  algin-items: center;
`;

const RightRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  algin-items: center;
`;

const ColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const RightColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;

const Code = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`;

const Name = styled.Text`
  color: #646464;
  font-size: 14px;
  font-weight: 400;
`;
