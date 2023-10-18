import React from 'react';
import styled from 'styled-components/native';
import Navbar from '../navigation/Navbar';

export default function Layout({ children, current }) {
  return (
    <BackgroundContainer>
      {children}
      <Navbar current={current} />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.View`
  background-color: #141414;
  width: 100%;
  height: 100%;
  position: relative;
`;
