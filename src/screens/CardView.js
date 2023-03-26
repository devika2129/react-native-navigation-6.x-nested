import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
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
            }}
          >
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
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {item.Title}
            </Text>
            <View style={styles.attributeContainer}>
              <Text style={{ fontWeight: "bold" }}>{"Releasd Year : "}</Text>
              <Text> {item.Year + "   "}</Text>
              <Text style={{ fontWeight: "bold" }}>{"Released On : "}</Text>
              <Text> {item.Released}</Text>
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeName}>{"Genre"} </Text>
              <Text style={styles.semiColon}>{":"} </Text>
              <Text style={styles.attributeValue}> {item.Genre}</Text>
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeName}>{"Director"} </Text>
              <Text style={styles.semiColon}>{":"} </Text>
              <Text style={styles.attributeValue}> {item.Director}</Text>
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeName}>{"Actors"} </Text>
              <Text style={styles.semiColon}>{":"} </Text>
              <Text style={styles.attributeValue}> {item.Actors}</Text>
            </View>
            <View style={styles.attributeContainer}>
              <Text style={styles.attributeName}>{"Awards"} </Text>
              <Text style={styles.semiColon}>{":"} </Text>
              <Text style={styles.attributeValue}> {item.Awards}</Text>
            </View>
          </View>
        );
      }}
    ></FlatList>
  );
};

export default CardView;
const styles = StyleSheet.create({
  attributeContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },
  attributeName: {
    fontWeight: "bold",
    width: 60,
  },
  semiColon: {
    fontWeight: "bold",
  },
  attributeValue: {
    flex: 1,
  },
});
