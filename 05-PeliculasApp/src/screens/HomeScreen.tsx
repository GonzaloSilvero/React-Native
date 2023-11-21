import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcomnig, isLoadig } = useMovies();
    const { top } = useSafeAreaInsets();


    if ( isLoadig ) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <ActivityIndicator color='red' size={ 100 }/>
        </View>
      )
    }

  return (
    <ScrollView>
        
      <View style={{ marginTop: top + 20}}>
        
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying }
            renderItem={ ({item}: any) => <MoviePoster movie={ item }/>}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

        <HorizontalSlider title='en cine' movies={ nowPlaying }/>
        <HorizontalSlider title='Populares' movies={ popular }/>
        <HorizontalSlider title='top rated' movies={ topRated }/>
        <HorizontalSlider title='upcoming' movies={ upcomnig }/>

      </View>
    </ScrollView>
  )
}
