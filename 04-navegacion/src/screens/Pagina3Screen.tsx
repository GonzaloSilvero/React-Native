import { View, Text, Button } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina3Screen</Text>

      <Button 
        title='Regresar'
        onPress={ () => navigation.pop() }
      />

      <Button 
        title='Ir al Home'
        onPress={ () => navigation.popToTop() }//destruye todo el stack
      />
    </View>
  )
}
