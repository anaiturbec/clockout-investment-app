import React from 'react';
import styled from 'styled-components/native';
import StockList from '../list';
import Stock from './Stock';
import { AllButton } from './buttons';
import { ActivityIndicator } from 'react-native';

export default function WatchList({ stocks, isLoading }) {
  return (
    <Container>
      <RowBetween>
        <Title>Watchlist</Title>
        <AllButton />
      </RowBetween>
      {isLoading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        <ListContainer>
          {stocks?.map((s) => (
            <Stock
              code={s?.T}
              icon={StockList.filter((l) => l.code === s?.T)[0]?.icon}
              name={StockList.filter((l) => l.code === s?.T)[0]?.name}
              price={s?.c}
              difference={s?.o - s?.c}
              percentage={Math.abs(100 * ((s?.c - s?.o) / ((s?.c + s?.o) / 2)))}
              key={s?.T}
            />
          ))}
        </ListContainer>
      )}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: 30px 20px;
  background-color: #242424;
  margin-top: 10px;
`;

const RowBetween = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: 500;
`;

const ListContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-top: 35px;
`;
