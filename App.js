import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  
      
      <NavigationContainer>
          <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Details" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
