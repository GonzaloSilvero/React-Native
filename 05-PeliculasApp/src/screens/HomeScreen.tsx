import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
// import { getColors } from 'react-native-image-colors';
// import ImageColors from 'react-native-image-colors';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcomnig, isLoadig } = useMovies();
    const { top } = useSafeAreaInsets();

    const getPosterColors = async (index: number) => {
      const movie = nowPlaying[index]
      const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`
      // const colors = await ImageColors.getColors(uri, {
      //   fallback: "#228B22",
      // })

      // console.log(colors)
    }


    if ( isLoadig ) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
          <ActivityIndicator color='red' size={ 100 }/>
        </View>
      )
    }

  return (
    <GradientBackground >
      <ScrollView>
          
        <View style={{ marginTop: top + 20}}>
          
          <View style={{ height: 440 }}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({item}: any) => <MoviePoster movie={ item }/>}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
              onSnapToItem={ index => getPosterColors(index)  }
            />
          </View>

          <HorizontalSlider title='en cine' movies={ nowPlaying }/>
          <HorizontalSlider title='Populares' movies={ popular }/>
          <HorizontalSlider title='top rated' movies={ topRated }/>
          <HorizontalSlider title='upcoming' movies={ upcomnig }/>

        </View>
      </ScrollView>
    </GradientBackground>
  )
}
