import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { colores, styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any>{};

export const SettingsScreen = ({navigation}: Props) => {
  
  const insets = useSafeAreaInsets();

  const { authState } = useContext( AuthContext )

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top
    }}>
      <Text style={ styles.title }>Settings Screen</Text>
      <Text>{ JSON.stringify( authState, null, 4) }</Text>

      { // nos aseguramos de que si o si existe favotiteIcon para mostrarlo
        authState.favoriteIcon && (
          <Icon 
            name={ authState.favoriteIcon }
            size={ 150 }
            color={ colores.primary }
          />
        )
      }

    
    </View>

  )
}
