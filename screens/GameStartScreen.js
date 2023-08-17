import React from 'react'
import { TextInput, View,StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

const GameStartScreen = () => {
    console.log("game screen")
  return (
    
<View style={styles.inputContainer}>
<TextInput/>
<PrimaryButton>Reset</PrimaryButton>
<PrimaryButton>cancel</PrimaryButton>
</View>
  )
}
export default GameStartScreen

const styles = StyleSheet.create({

    inputContainer:{
        padding: 20,
        marginTop: 100,
        backgroundColor: "#8a2be2",
        marginHorizontal: 20,
        borderRadius: 8,
        elevation: 8
    }
})