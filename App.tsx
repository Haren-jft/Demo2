import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/screens/Login/Login';
import {StatusBar} from 'react-native';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Login />
    </NavigationContainer>
  );
};

export default App;
