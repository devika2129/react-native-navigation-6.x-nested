import React from "react";
import { FlatList, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MovieData from "./MovieData.json";
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
              marginVertical: "1%",
              alignItems: "center",
              padding: 5,
              borderRadius:10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsScreen", { item })}
            >
              <Image
                source={{
                  uri: item.Images[0],
                }}
                style={{
                  width: 300,
                  height: 150,
                  borderWidth: 1,
                  resizeMode: "stretch",
                  borderRadius:10,
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
