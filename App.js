import { View,StyleSheet } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";

  export default function App() {
    return (
      <View style = {styles.rootScreen}>
        <GameStartScreen />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    rootScreen: {
      flex: 1,
      backgroundColor: "#d4e028",
    },
  })  