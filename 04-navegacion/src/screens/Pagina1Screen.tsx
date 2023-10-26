import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};


export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina1Screen</Text>

      <Button 
        title='Ir Pagina 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <Text> Navegar con argumentos </Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'Pedro'
        }) }
      >
          <Text>Pedro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={ () => navigation.navigate('PersonaScreen', {
          id: 2,
          nombre: 'Maria'
        }) }
      >
          <Text>Maria</Text>
      </TouchableOpacity>

    </View>
  )
}
