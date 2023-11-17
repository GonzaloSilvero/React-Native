import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasEnCine, isLoadig } = useMovies();
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
            data={ peliculasEnCine }
            renderItem={ ({item}: any) => <MoviePoster movie={ item }/>}
            sliderWidth={ windowWidth }
            itemWidth={ 300 }
          />
        </View>

        <View style={{ backgroundColor: 'red', height: 250}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
            data={ peliculasEnCine }
            renderItem={ ({item}: any) => (
              <MoviePoster movie={ item } width={ 125 } height={ 200 }/>
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          />
        </View>

        <View style={{ backgroundColor: 'red', height: 250}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>En cine</Text>
          <FlatList
            data={ peliculasEnCine }
            renderItem={ ({item}: any) => (
              <MoviePoster movie={ item } width={ 125 } height={ 200 }/>
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
          />
        </View>

      </View>
    </ScrollView>
  )
}
