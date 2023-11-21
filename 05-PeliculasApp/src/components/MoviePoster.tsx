import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  return (
    <View style={{
      width,
      height,
      marginHorizontal: 5
    }}>
        <Image 
          source={{ uri }}
          style={ styles.image }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
      flex:1,
      borderRadius: 18
    },
}); 