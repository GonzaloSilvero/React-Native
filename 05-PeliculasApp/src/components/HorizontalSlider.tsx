import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  
  return (
    <View style={{ 
      height: ( title ) ? 250 : 210
      }}>
      {
        // title ? <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text> : null
        title && <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>{title}</Text>
      }
      <FlatList
        data={ movies }
        renderItem={ ({item}: any) => (
          <MoviePoster movie={ item } width={ 125 } height={ 200 }/>
        )}
        keyExtractor={ (item) => item.id.toString() }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
      />
    </View>
  )
}
