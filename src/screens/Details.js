import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";
import { useNavigation } from "@react-navigation/native";

const GridView = (props) => {
  const navigation = useNavigation();
  return (
    <FlatList
      numColumns={2}
      data={MovieData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              width: "48%",
              marginHorizontal: "1%",
              alignItems: "center",
              padding: 5,
              borderWidth: 0.75,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreen")}
            >
              <Image
                source={{
                  uri: item.Images[0],
                }}
                style={{
                  width: 150,
                  height: 100,
                  borderWidth: 0.75,
                  resizeMode: "center",
                }}
              />
            </TouchableOpacity>
            <Text style={{}}>{item.Title}</Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default GridView;
