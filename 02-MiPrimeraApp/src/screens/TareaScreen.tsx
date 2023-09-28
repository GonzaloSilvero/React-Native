import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada }/>
        <View style={ styles.cajaNaranja }/>
        <View style={ styles.cajaAzul }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between', // sin esto deberia funcionar tambien, pero nada funciona
    },
    cajaMorada: {
        // width: 100,
        // height: 100,
        flex: 2, //1
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        // width: 100,
        // height: 100,
        flex: 2, //1
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul: {
        // width: 100,
        // height: 100,
        flex: 4, //2
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});