import React from "react";
import { View, Text, Pressable,StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  console.log(children);
  return (
    <View style={styles.outerContainer}>
      <Pressable style={({pressed})=>pressed ? [styles.pressed,styles.container]: styles.container} android_ripple={{ color:"lightBlue"}}>
        <Text style = {styles.textStyle}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius: 15,
        marginTop: 5,
        overflow: "hidden"

    },
    container:{
        backgroundColor: "#006400",
        paddingHorizontal:20,
        paddingVertical: 15,
     
    },
    textStyle:{
        color: "white",
        textAlign: "center"
    },
    pressed:{
        opacity: 0.75
    }
})