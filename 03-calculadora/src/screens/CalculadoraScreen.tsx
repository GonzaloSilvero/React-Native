import React, { useRef, useState } from 'react'
import { Text, View, StatusBar } from 'react-native';
import { styles } from '../theme/appTheme'
import { BotonCal } from '../components/BotonCal'

enum Operadores {
    sumar, restar, multiplar, dividir
}

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = ( numeroTexto: string ) => {
        
        //no aceptar doble punto
        if ( numero.includes('.') && numeroTexto === '.' ) return;

        if ( numero.startsWith('0') || numero.startsWith('-0') ) {
            
            //punto decimal
            if ( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto )
                
                //evaluar si es otro cero, y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto )

                // evaluar si es diferente de 0 y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numeroTexto )
                
                //evitar 0000.0
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero )
            } else {
                setNumero( numero + numeroTexto )
            }

        } else {
            setNumero( numero + numeroTexto )
        }

    }

    const positivoNegativo = () => {
        if( numero.includes('-') ) {
            setNumero( numero.replace('-', '') )
        } else {
            setNumero( '-' + numero )
        }
    }

    const btnDelete = (  ) => {

        let negativo = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }

        if ( numeroTemp.length > 1 ) {
            setNumero( numeroTemp = numeroTemp.slice(0,-1) );
        } else {
            setNumero('0');
        }
    }

    const cambiarNumPorAnterior = () => {
        if ( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice(0,-1) );
        } else {
            setNumeroAnterior( numero );
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }
    const btnMultiplicar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplar;
    }
    const btnRestar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }
    const btnSumar = () => {
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

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
            <BotonCal texto='=' color='#FF9427' accion={ limpiar }/>

        </View>

    </View>
  )
}
