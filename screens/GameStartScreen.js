import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = () => {
  console.log("game screen");
  return (
    <View style={styles.inputContainer}>

        <TextInput
          style={styles.inputStyle}
          maxLength={2}
          keyboardType="number-pad"
        />
      <View style={styles.buttonStyles}>
        <View style={styles.buttonSingleStyles}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonSingleStyles}>
          <PrimaryButton>cancel</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default GameStartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "#ba2f2f",
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 0,
    shadowOffset: 5,shadowOffset: { width: 0, height: 2 },
  },
  inputStyle: {
    width: 50,
    height: 50,
    borderBottomColor: "yellow",
    borderBottomWidth: 4,
    color: "yellow",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
  },

  buttonStyles: {
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonSingleStyles: {
   margin: 2,
    flex: 1,
  },
});
