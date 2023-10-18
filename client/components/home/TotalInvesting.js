import React from 'react';
import styled from 'styled-components/native';
import { ViewAmountButton } from './buttons';
import { GrowthIcon, QuestionIcon, DeclineIcon } from '../../assets/icons';

export default function TotalInvesting({ stocks }) {
  // states
  const [viewAmount, setViewAmount] = React.useState(true);
  // total closing price of watchList stocks
  const amount =
    stocks?.map((stock) => stock?.c)?.reduce((a, b) => a + b, 0) ?? 0;
  // total difference of closing and opening stock prices
  const difference =
    stocks?.map((stock) => stock?.o - stock?.c)?.reduce((a, b) => a + b, 0) ??
    0;
  // total difference percentage of closing and opening stock prices
  const percentage =
    stocks
      ?.map(
        (stock) => 100 * ((stock?.c - stock?.o) / ((stock?.c + stock?.o) / 2))
      )
      ?.reduce((a, b) => a + b, 0) ?? 0;

  const Text = styled.Text`
    font-size: 16px;
    color: ${difference < 0 ? '#A52020' : '#1d7a34'};
    font-weight: 500;
  `;

  return (
    <Container>
      <Subtitle>TOTAL INVESTING</Subtitle>
      <RowContainer>
        <Title>{viewAmount ? `$${amount.toFixed(2)}` : '. . . . . .'}</Title>
        <ViewAmountButton
          viewAmount={viewAmount}
          setViewAmount={setViewAmount}
        />
      </RowContainer>
      <RowContainer>
        {difference < 0 ? (
          <DeclineIcon width={16} height={16} color="#A52020" />
        ) : (
          <GrowthIcon width={20} height={20} color="#1D7A34" />
        )}
        <Text>
          {difference > 0 ? '+' : null} ${difference.toFixed(2)} (
          {Math.abs(percentage?.toFixed(2))}%)
        </Text>
        <QuestionIcon width={20} height={20} color="#646464" />
      </RowContainer>
      <Line />
    </Container>
  );
}

const Container = styled.View`
  flex: auto;
  flex-direction: column;
  gap: 10px 0px;
  padding: 0px 20px;
`;

const RowContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px 0px;
  align-items: center;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: #646464;
  font-weight: 700;
`;

const Title = styled.Text`
  font-size: 40px;
  color: white;
  font-weight: 700;
`;

const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: #272727;
  margin: 15px 0px;
`;
