import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../Screens/Home/Home';
import World from '../../Screens/World/World';
import { useTheme } from '../../Contexts/ThemeContext';

export type TabParamList = {
  home: undefined;
  world: undefined;
  science: undefined;
};

const Tab = createMaterialTopTabNavigator<TabParamList>();

const TabView: React.FC = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: theme.primary
      }
    }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="world" component={World} />
      <Tab.Screen name="science" component={World} />
    </Tab.Navigator>
  );
};

export default TabView;