import React from 'react';
import {
  HomeScreen,
  PortfolioScreen,
  MarketsScreen,
  MoreScreen,
} from '../../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const mainRoutes = [
  {
    name: 'Home',
    component: HomeScreen,
    options: { gestureEnabled: false },
  },
  {
    name: 'Markets',
    component: MarketsScreen,
  },
  {
    name: 'Portfolio',
    component: PortfolioScreen,
  },
  {
    name: 'More',
    component: MoreScreen,
  },
];

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          animation: 'fade',
        }}
      >
        {mainRoutes.map((routeConfig) => (
          <RootStack.Screen
            key={routeConfig.name}
            options={routeConfig.component}
            {...routeConfig}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
