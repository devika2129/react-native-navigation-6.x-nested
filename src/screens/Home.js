import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";

const GridView = (props) => {
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
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                }}
                style={{
                  width: 150,
                  height: 150,
                  borderWidth: 0.75,
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
