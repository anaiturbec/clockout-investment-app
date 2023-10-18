import React from 'react';
import styled from 'styled-components/native';
import { NavButton } from './buttons';
import {
  HomeIcon,
  MarketIcon,
  MoreIcon,
  PortfolioIcon,
  TradeIcon,
} from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';

export default function Navbar({ current }) {
  // hooks
  const navigation = useNavigation();
  return (
    <Nav>
      <NavButton
        name="Home"
        icon={
          <HomeIcon
            width={20}
            height={20}
            color={current === 'home' ? '#49DE7E' : '#646464'}
          />
        }
        onPress={() => navigation.navigate('Home')}
        selected={current === 'home'}
      />
      <NavButton
        name="Markets"
        icon={
          <MarketIcon
            width={20}
            height={20}
            color={current === 'markets' ? '#49DE7E' : '#646464'}
          />
        }
        onPress={() => navigation.navigate('Markets')}
        selected={current === 'markets'}
      />
      <Button>
        <TradeIcon
          width={30}
          height={30}
          color={current === 'trade' ? '#49DE7E' : '#646464'}
        />
      </Button>
      <NavButton
        name="Portfolio"
        icon={
          <PortfolioIcon
            width={20}
            height={20}
            color={current === 'portfolio' ? '#49DE7E' : '#646464'}
          />
        }
        onPress={() => navigation.navigate('Portfolio')}
        selected={current === 'portfolio'}
      />
      <NavButton
        name="More"
        icon={
          <MoreIcon
            width={20}
            height={20}
            color={current === 'more' ? '#49DE7E' : '#646464'}
          />
        }
        onPress={() => navigation.navigate('More')}
        selected={current === 'more'}
      />
    </Nav>
  );
}

const Nav = styled.View`
  width: 100%;
  height: 110px;
  background-color: #242424;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 20px 30px;
`;

const Button = styled.Pressable`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
`;
