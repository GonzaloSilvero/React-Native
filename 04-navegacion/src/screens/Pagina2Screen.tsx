import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

  const navigation = useNavigation();

  useEffect(() => { //esto sobre escribe el predeterminado del padre
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>

      <Text style={ styles.title }>Pagina2Screen</Text>

       <Button 
        title='Ir a Pagina 3'
        onPress={ () => navigation.navigate('Pagina3Screen') }
       />
      
    </View>
  )
}
