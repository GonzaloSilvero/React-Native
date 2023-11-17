import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  console.log( movie.poster_path )
  return (
    <View style={{
      width: 300,
      height: 420
    }}>
      <View style={ styles.imageContainer }>
        <Image 
          source={{ uri }}
          style={ styles.image }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    },
    image: {
      flex:1,
      borderRadius: 18
    },
}); 