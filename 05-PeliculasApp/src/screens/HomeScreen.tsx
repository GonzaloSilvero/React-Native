import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import movieDB from '../api/movieDB'

export const HomeScreen = () => {

  useEffect(() => {
    
    movieDB.get('/now_playing')
      .then( resp => {
        console.log(resp)
      })

  }, [])
  
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}
