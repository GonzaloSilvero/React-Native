import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme'
import { BotonCal } from '../components/BotonCal'
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {
    
    const { 
        numero, 
        numeroAnterior, 
        limpiar, 
        positivoNegativo, 
        armarNumero, 
        calcular, 
        btnDelete, 
        btnDividir, 
        btnMultiplicar, 
        btnRestar, 
        btnSumar 
    } = useCalculadora()

  return (
    <View style={ styles.calculadoraContainer }>

        {
            ( numeroAnterior !== '0' ) && (
                <Text style={ styles.resultadoChico }>{ numeroAnterior }</Text>
            )
        }
        <Text 
            style={ styles.resultado }
            numberOfLines={ 1 }
            adjustsFontSizeToFit
        >
            { numero }
        </Text>


        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='C' color='#9B9B9B' accion={ limpiar }/>
            <BotonCal texto='+/-' color='#9B9B9B' accion={ positivoNegativo }/>
            <BotonCal texto='del' color='#9B9B9B' accion={ btnDelete }/>
            <BotonCal texto='/' color='#FF9427' accion={ btnDividir }/>

        </View>

        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='7' accion={ armarNumero }/>
            <BotonCal texto='8' accion={ armarNumero }/>
            <BotonCal texto='9' accion={ armarNumero }/>
            <BotonCal texto='x' color='#FF9427' accion={ btnMultiplicar }/>

        </View>

        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='4' accion={ armarNumero }/>
            <BotonCal texto='5' accion={ armarNumero }/>
            <BotonCal texto='6' accion={ armarNumero }/>
            <BotonCal texto='-' color='#FF9427' accion={ btnRestar }/>

        </View>

        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='1' accion={ armarNumero }/>
            <BotonCal texto='2' accion={ armarNumero }/>
            <BotonCal texto='3' accion={ armarNumero }/>
            <BotonCal texto='+' color='#FF9427' accion={ btnSumar }/>

        </View>

        <View style={ styles.fila }>

            {/* Boton */}
            <BotonCal texto='0' ancho accion={ armarNumero }/>
            <BotonCal texto='.' accion={ armarNumero }/>
            <BotonCal texto='=' color='#FF9427' accion={ calcular }/>

        </View>

    </View>
  )
}
