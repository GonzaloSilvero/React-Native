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