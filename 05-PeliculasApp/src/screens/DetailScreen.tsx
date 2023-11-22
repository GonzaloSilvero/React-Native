import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'

import { RootStackParams } from '../navigators/Navigation';
// ESTA DEFINIDO EN EL NAVEGADOR EN VEZ DE HACERLO DESDE ACA
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  console.log(movie.original_title)

  return (
    <ScrollView>
      <View style={ styles.imageContainer }>
        <Image
          source={{ uri }}
          style={ styles.posterImage }
          />
      </View>

      <View style={ styles.marginContainer}>
        <Text style={ styles.subTitle }>{movie.original_title}</Text>
        <Text style={ styles.title }>{movie.title}</Text>
      </View>

      <View style={ styles.marginContainer}>
        <Icon
          name="star-outline"
          color='grey'
          size={ 20 }
        />
      </View>

    </ScrollView>



  )
}


const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex:1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
}); 