import React from 'react';
import Layout from '../components/layout/Layout';
import styled from 'styled-components/native';

export default function MarketsScreen() {
  return (
    <Layout current="markets">
      <Container>
        <Text>Markets</Text>
      </Container>
    </Layout>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 24px;
`;
