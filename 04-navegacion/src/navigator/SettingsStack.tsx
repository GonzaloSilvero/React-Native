import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

export type RootStackParams = {
  SettingsScreen: undefined,
  Pagina1Screen: undefined,
  StackNavigator: undefined,
}


const Stack = createStackNavigator<RootStackParams>();

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="SettingsScreen" options={{ title: ''}} component={SettingsScreen} />
      <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina 1'}} component={Pagina1Screen} />
      <Stack.Screen name="StackNavigator" options={{ title: 'Pagina 3'}} component={StackNavigator} />
    </Stack.Navigator>
  );
}