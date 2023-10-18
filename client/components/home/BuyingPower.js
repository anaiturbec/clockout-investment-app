import React from 'react';
import styled from 'styled-components/native';
import { QuestionIcon } from '../../assets/icons';
import { DepositButton } from './buttons';

export default function BuyingPower() {
  return (
    <Container>
      <ColumnContainer>
        <RowContainer>
          <Subtitle>BUYING POWER</Subtitle>
          <QuestionIcon width={20} height={20} color="#646464" />
        </RowContainer>
        <Title>$840.50</Title>
      </ColumnContainer>
      <DepositButton />
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #646464;
  font-weight: 700;
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px 0px;
  align-items: center;
`;

const ColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px 0px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: 500;
`;
