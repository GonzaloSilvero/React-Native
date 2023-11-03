import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'


export const Tab1Screen = () => {
  
  useEffect(() => {
    console.log('Tab1Screen effect')
  }, [])
  
  
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>iCONOS</Text>

      {/* los iconos van dentro de textos */}
      <Text>
        <Icon name="airplane-outline" size={80} color={ colores.primary } />
        <Icon name="accessibility-outline" size={80} color={ colores.primary } />
        <Icon name="add-circle-outline" size={80} color={ colores.primary } />
        <Icon name="build-outline" size={80} color={ colores.primary } />
        <Icon name="chatbubble-outline" size={80} color={ colores.primary } />
        <Icon name="cloudy-outline" size={80} color={ colores.primary } />
        <Icon name="eye-outline" size={80} color={ colores.primary } />
        <Icon name="heart-outline" size={80} color={ colores.primary } />
      </Text>
    </View>
  )
}
