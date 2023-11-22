import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';

import { RootStackParams } from '../navigators/Navigation';
// ESTA DEFINIDO EN EL NAVEGADOR EN VEZ DE HACERLO DESDE ACA
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('screen').height;
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  const { isLoafing, cast, movieFull } = useMovieDetails( movie.id );

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

        {
          isLoafing
            ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />
            : <MovieDetails movieFull={movieFull!} cast={cast}/>
        }

        {/* Boton para cerrar */}
        <View style={ styles.backButtom }>
          <TouchableOpacity
            onPress={ () => navigation.pop() }
          >
            <Icon 
              color='white'
              name='arrow-back-outline'
              size={ 50 }
              />
          </TouchableOpacity>
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
  },
  backButtom: {
    position: 'absolute',
    elevation: 9,
    top: 20,
    left: 5
  }
}); 