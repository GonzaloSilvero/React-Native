import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {

  const { signIn, authState } = useContext( AuthContext)
  //* const { isLoggedIn } = authState


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>ContactsScreen</Text>

      {
        !authState.isLoggedIn && <Button title='SignIn' onPress={ signIn }/> 
        //* !isLoggedIn && <Button title='SignIn' onPress={ signIn }/> 
      }
      
    </View>
  )
}