import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {

}

export const Pagina1Screen = ( { navigation }: Props ) => {

  

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina1Screen </Text>

        <Button
          title='Ir pagina 2'
          onPress={ () => navigation.navigate('Pagina2Screen') }
        />

        <View style={{ flexDirection: 'row'}}>
          <TouchableOpacity
            style={{ 
              ...styles.botonGrande,
              backgroundColor: '#6B31B7'
             }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id:1,
              nombre: 'pedro'
            }) }
          >
            <Text style={ styles.botonGrandeTexto }> Pedro </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ 
              ...styles.botonGrande,
              backgroundColor: '#DE7400'
             }}
            onPress={ () => navigation.navigate('PersonaScreen', {
              id:2,
              nombre: 'Maria'
            }) }
          >
            <Text style={ styles.botonGrandeTexto }> Maria </Text>
          </TouchableOpacity>
        </View>


    </View>
  )
}
