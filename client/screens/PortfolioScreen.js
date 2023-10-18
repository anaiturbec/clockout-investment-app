import React from 'react';
import styled from 'styled-components/native';
import Layout from '../components/layout/Layout';

export default function PortfolioScreen() {
  return (
    <Layout current="portfolio">
      <Container>
        <Text>Portfolio</Text>
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
