import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/presentations/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
