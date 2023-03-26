import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";

const CardView = (props) => {
  return (
    <FlatList
      data={MovieData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              width: "98%",
              marginHorizontal: "1%",
              padding: 5,
              borderWidth: 0.75,
            }}
          >
            <TouchableOpacity>
              <Image
                source={{
                  uri: item.Images[0],
                }}
                style={{
                  width: 390,
                  height: 190,
                  borderWidth: 0.75,
                  alignItems: "center",
                  resizeMode: "stretch",
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {item.Title}
            </Text>
            <Text>
              {"Releasd Year : " + item.Year + "   "}
              {"Released On: " + item.Released}
            </Text>
            <Text>{"Genre : " + item.Genre}</Text>
            <Text>{"Director : " + item.Director}</Text>
            <Text>{"Actors : " + item.Actors} </Text>
            <Text>{"Awards : " + item.Awards}</Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default CardView;
