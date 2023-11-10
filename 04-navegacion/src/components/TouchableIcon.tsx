import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
  return (
    <TouchableOpacity
        onPress={ () => console.log( iconName )}
    >
        <Icon 
            name={ iconName}
            size={ 80 }
            color={ colores.primary}
        />
    </TouchableOpacity>
  )
}
