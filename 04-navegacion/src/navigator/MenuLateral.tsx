import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: { backgroundColor: '#CFD8F7'}
      }}
      drawerContent={ (props) => <MenuInterno { ...props }/>}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps) => {

  return (
    <DrawerContentScrollView>

      {/* Parte del Avatar */}
      <View style={ styles.avatarContainer}>
        <Image 
          source={{ 
            uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        />
      </View>

      {/* Opciones de manu */}
      <View style={ styles.menuContainer}>
        <TouchableOpacity 
          style={ styles.MenuBoton}
          onPress={ () => navigation.navigate('StackNavigator')}
        >
          <Text style={ styles.menuTexto}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={ styles.MenuBoton}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Text style={ styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>

  );
}