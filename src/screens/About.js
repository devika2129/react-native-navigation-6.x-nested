import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";
import DetailsScreen from "./DetailsScreen";
import { useNavigation } from "@react-navigation/native";

const ListView = (props) => {
  const navigation = useNavigation();
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
              alignItems: "center",
              padding: 5,
              borderWidth: 0.75,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreen", { item })}
            >
              <Image
                source={{
                  uri: item.Poster,
                }}
                style={{
                  width: 340,
                  height: 150,
                  borderWidth: 0.75,
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.Title}
            </Text>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default ListView;
