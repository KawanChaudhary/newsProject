import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './Drawer/Drawer';


const RootNavigator : React.FC = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
