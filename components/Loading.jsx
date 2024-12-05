import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'

const Loading = ({
    size="large",
    color=theme.colors.primary
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={size} color={color}></ActivityIndicator>
    </View>
  )
}

export default Loading