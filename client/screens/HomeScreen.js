import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components/native';
import {
  TotalInvesting,
  WatchList,
  BuyingPower,
  StockList,
} from '../components';
import { useQuery } from '@tanstack/react-query';
import { getStocks } from '../api/stocks';
import { RefreshControl } from 'react-native';
import Layout from '../components/layout/Layout';

export default function HomeScreen() {
  // states
  const [stocks, setStocks] = React.useState();
  const [refreshing, setRefreshing] = React.useState(false);
  const [date, setDate] = React.useState('2022-08-05');
  //queries
  const stocksQuery = useQuery({
    queryKey: ['stocks', date],
    queryFn: ({ queryKey }) => getStocks(queryKey[1]),
  });

  // generates random Date
  randomDate = dayjs(
    new Date(+new Date() - Math.floor(Math.random() * 10000000000))
  ).format('YYYY-MM-DD');

  React.useEffect(() => {
    if (stocksQuery?.data && !stocksQuery?.isLoading) {
      setStocks(
        stocksQuery?.data?.results?.filter(
          (r) =>
            r?.T === 'AAP' ||
            r?.T === 'LFT' ||
            r?.T === 'ADBE' ||
            r?.T === 'TSLA'
        )
      );
    }
    // refreshes page if queryCount is 0
    if (stocksQuery?.data?.queryCount === 0) {
      onRefresh();
    }
  }, [stocksQuery.data, stocksQuery.isLoading]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setDate(randomDate);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  });

  return (
    <Layout current="home">
      <MainContainer
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#ffffff"
          />
        }
      >
        <TotalInvesting stocks={stocks} />
        <BuyingPower />
        <WatchList stocks={stocks} isLoading={stocksQuery?.isLoading} />
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
  padding: 70px 0px;
  width: 100%;
`;

const BackgroundContainer = styled.View`
  background-color: #141414;
  width: 100%;
  height: 100%;
`;
