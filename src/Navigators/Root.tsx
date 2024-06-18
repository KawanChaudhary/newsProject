import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './Stack/StackNavigator';
import CustomizeStatusBar from '../Components/General/CustomizeStatusbar';


const RootNavigator : React.FC = () => {
  return (
    <NavigationContainer>
      <CustomizeStatusBar />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
