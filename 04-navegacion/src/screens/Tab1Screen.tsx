import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>ICONOS</Text>

      {/* los iconos van dentro de textos */}
      <Text>
        <TouchableIcon iconName="airplane-outline"  />
        <TouchableIcon iconName="accessibility-outline"  />
        <TouchableIcon iconName="add-circle-outline"  />
        <TouchableIcon iconName="build-outline"  />
        <TouchableIcon iconName="chatbubble-outline"  />
        <TouchableIcon iconName="cloudy-outline"  />
        <TouchableIcon iconName="eye-outline"  />
        <TouchableIcon iconName="heart-outline"  />
      </Text>
    </View>
  )
}
