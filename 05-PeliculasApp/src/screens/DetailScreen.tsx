import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'

import { RootStackParams } from '../navigators/Navigation';
// ESTA DEFINIDO EN EL NAVEGADOR EN VEZ DE HACERLO DESDE ACA

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;

  console.log(movie.original_title)

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}