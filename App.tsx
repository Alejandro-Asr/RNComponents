import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { Navigator } from './src/navigator/Navigator';

const App = () => {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>    
  )
}

export default App;
