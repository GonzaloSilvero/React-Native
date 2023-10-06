import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola',// cambia el titulo del header
      headerBacktitle: 'Atras' //iOS cambia lo que dice el header segun el idioma del dispositivo
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina2Screen </Text>

        <Button
          title='Ir pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />

    </View>
  )
}
