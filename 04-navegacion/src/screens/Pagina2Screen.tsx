import { View, Text, Button } from 'react-native';
import React from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  return (
    <View style={ styles.globalMargin }>

      <Text style={ styles.title }>Pagina2Screen</Text>

       <Button 
        title='Ir a Pagina 3'
        onPress={ () => navigator.navigate('Pagina3Screen') }
       />
    </View>
  )
}
