import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { BotonCal } from '../components/BotonCal'

export const CalculadoraScreen = () => {
  return (
    <View style={ styles.calculadoraContainer }>
        <Text style={ styles.resultadoChico }>1,500.00</Text>
        <Text style={ styles.resultado }>1,500.00</Text>


        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='C' color='#9B9B9B'/>
            <BotonCal texto='+/-' color='#9B9B9B'/>
            <BotonCal texto='del' color='#9B9B9B'/>
            <BotonCal texto='/' color='#FF9427'/>

        </View>

    </View>
  )
}
