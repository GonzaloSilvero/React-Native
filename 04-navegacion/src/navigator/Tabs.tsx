import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
 
  return Platform.OS === 'ios'
          ? <TabsIos />
          : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({focused, color,}) => {
  
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'accessibility-outline'
            break;
  
            case 'TopTabNavigator':
              iconName = 'grid-outline'
            break;
  
            case 'StackNavigator':
              iconName = 'layers-outline'
            break;
          }
  
          return <Icon name={ iconName } size={25} color={ color } />
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1', }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIos = createBottomTabNavigator();

 const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{ 
        backgroundColor: 'white'
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: { 
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({focused, color, size}) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'accessibility-outline'
            break;
  
            case 'TopTabNavigator':
              iconName = 'grid-outline'
            break;
  
            case 'StackNavigator':
              iconName = 'albums-outline'
            break;
          }

          return <Icon name={ iconName } size={25} color={ color } />
        }
      })}
      
    >
      <BottomTabIos.Screen name="Tab1Screen" options={{ title: 'Tab1', }} component={Tab1Screen} />
      <BottomTabIos.Screen name="TopTabNavigator" options={{ title: 'Tab2'}} component={TopTabNavigator} />
      <BottomTabIos.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabIos.Navigator>
  );
}