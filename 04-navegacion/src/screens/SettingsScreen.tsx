import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'
import { useNavigation } from '@react-navigation/native'


export const SettingsScreen = () => {

  const navigation = useNavigation();
  
  return (
    <View>

    <View style={ styles.avatarContainer}>
    <Image
      source={{ 
        uri: 'https://hwchamber.co.uk/wp-content/uploads/2022/04/avatar-placeholder.gif'
      }}
      style={{ 
        ...styles.avatar, 
        width: 150,
        height: 150
      }}
      />
    </View>

     <View style={ styles.menuContainer}>
     <TouchableOpacity 
      style={ styles.MenuBoton}
     >
       <Text style={ styles.menuTexto}>Perfil</Text>
     </TouchableOpacity>
  
     <TouchableOpacity 
      style={ styles.MenuBoton}
     >
       <Text style={ styles.menuTexto}>Home</Text>
     </TouchableOpacity>

     <TouchableOpacity 
      style={ styles.MenuBoton}
     >
       <Text style={ styles.menuTexto}>Contactanos</Text>
     </TouchableOpacity>
   </View>
  </View>

  )
}
