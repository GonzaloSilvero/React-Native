import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
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
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
    },
    caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
    },
    caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
    }
});