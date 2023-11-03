import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

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

      <View style={{ flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'purple'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          }) }
        >
          <Icon name='man-outline' size={40} color={'white'} />
          <Text style={ styles.botonGrandeTexto }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: 'orange'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          }) }
        >
          <Icon name='woman-outline' size={40} color={'white'} />
          <Text style={ styles.botonGrandeTexto }>Maria</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
