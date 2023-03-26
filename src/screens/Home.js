import React from "react";
import { View, Text } from "react-native";

const GridView = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e6e6fa",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 18,
          marginTop: 0,
          width: 200,
          textAlignVertical: "center",
        }}
      >
        Welcome to Dynamic UI POC
      </Text>
      <Text>Use the menu bar to see the views of the Movies</Text>
    </View>
  );
};

export default GridView;
