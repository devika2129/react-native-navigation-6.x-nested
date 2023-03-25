import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";

const ListView = (props) => {
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
                  uri: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
                }}
                style={{
                  width: 340,
                  height: 100,
                  borderWidth: 0.75,
                  alignItems: "center",
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                alignItems: "stretch",
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

export default ListView;
