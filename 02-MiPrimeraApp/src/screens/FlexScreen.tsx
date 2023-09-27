import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
        <Text style={ styles.caja1 }>caja1</Text>
        <Text style={ styles.caja2 }>caja2</Text>
        <Text style={ styles.caja3 }>caja3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 300,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
    }
});