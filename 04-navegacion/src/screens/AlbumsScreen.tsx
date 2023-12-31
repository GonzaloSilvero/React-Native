import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {

  const { logout, authState: { isLoggedIn } } = useContext( AuthContext)

  return (
    <View style={ styles.globalMargin }>
      <Text>AlbumsScreen</Text>

      {
        isLoggedIn && <Button title='Logout' onPress={ logout }/> 
      }
      
    </View>
  )
}
