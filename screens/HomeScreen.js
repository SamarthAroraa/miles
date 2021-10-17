import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <View>
      <Text style={tw`text-xl font-medium text-black`}>
        This is the home screen
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
