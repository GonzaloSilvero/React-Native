import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('DetailScreen', movie) }
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 6,
      }}
    >
      <View style={ styles.imageContainer }> 
        <Image 
          source={{ uri }}
          style={ styles.image }
          />
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    image: {
      flex:1,
      borderRadius: 18
    },
    imageContainer: {
      flex: 1,
      borderRadius: 18,
      overflow: 'hidden',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
    }
}); 