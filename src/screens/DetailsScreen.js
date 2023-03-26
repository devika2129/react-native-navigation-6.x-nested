import React from "react";
import { View, Text, Image, FlatList, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function DetailsScreen(props) {
  const { Title, Year, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Metascore, imdbRating, imdbVotes, Images } = props.route.params.item;

  const renderFilteredList = (tempData) => {
    const data = Object.keys(tempData);
    return(
      <View>
        {data.map((item, index) => {
          console.log(item);
           if(
            item === "Poster" || 
            item === "Images" || 
            item === "imdbID" || 
            item === "Response" || 
            item === "ComingSoon" ||
            tempData[item] === "N/A"
            ){
            return <View key={item}></View> ;
          }
          return (
            <View style={styles.attributeContainer} key={item}>
              <Text style={styles.attributeName}>
                {item}
              </Text>
              <Text style={styles.semiColon}>
                {": "}
              </Text>
              <Text style={styles.attributeValue}>
                {tempData[item]}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  const renderImages = (Images) =>{
    const tempImages = Images.filter((item, index)=>{
      if(index===0){
        return false ; 
      }
      return true ; 
    })
    return(
      <View >
        {tempImages.map((image) => {
          
          return (
            <Image
            source={{
              uri: image,
            }}
            style={{
              width: 380 ,
              height: 190,
              borderWidth: 0.75,
              alignItems: "center",
              marginVertical:5,
              borderRadius:10
            }}
            key={image}
          />
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
    <View style={{marginHorizontal:5,}}>
      <Image
        source={{
          uri: Images[0],
        }}
        style={{
          width: 380 ,
          height: 190,
          borderWidth: 0.75,
          alignItems: "center",
          borderRadius:10,
        }}
      />
      {renderFilteredList(props.route.params.item)}
      {Images.length>1  && <Text>{"Some more images of "}{Title}</Text>}
      {renderImages(Images)}
      {/* <FlatList
        data={Object.keys(tempData)}
        ListHeaderComponent={<Text></Text>}
        ListFooterComponent={ <Text></Text>}
        renderItem={({ item }) => {
        if(item === "Poster" || item === "Images" || item === "imdbID" || item === "Response"){
          return<></>;
        }
        console.log(item);
        return (
          <View style={styles.attributeContainer}>
            <Text style={styles.attributeName}>
              {item}{": "}
            </Text>
            <Text style={styles.attributeValue}>
              {tempData[item]}
            </Text>
          </View>
        );
        }
      }
      /> */}

      
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  attributeContainer: {
    flexDirection: 'row',
    marginVertical:3,
  },
  attributeName:{
    fontWeight: 'bold',
    width:95,
  },
  semiColon:{
    fontWeight: 'bold',
  },
  attributeValue:{
    flex:1,
  },
});
