import React from 'react'
import { View,Text } from 'react-native'

const PrimaryButton = ({children}) => {
    console.log(children)
  return (
    <View>
        <Text>{children}</Text>
    </View>
  )
}

export default PrimaryButton