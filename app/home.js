import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useRouter } from "expo-router";

// import {Card, Button , Title ,Paragraph } from 'react-native-paper';
export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let colors = ['white', 'blue', 'red', 'yellow']
  const router = useRouter();
  const onPress = (item) => {
    router.setParams(item)
    router.push({
      pathname: "/movie",
      // /* 1. Navigate to the details route with query params */
      params:item
    },)
  }
  const getMovies = async () => {
    try {

      const response = await axios.get('https://mocki.io/v1/99e17d6a-5f28-459a-8df8-f9a2a483c35c');
      console.log(response.data);
      //const response = await fetch('https://mocki.io/v1/99e17d6a-5f28-459a-8df8-f9a2a483c35c');
      // console.log(response)
      // const json= await response.json()

      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  return (
    // <ScrollView>
    // <ScrollView horizontal={true}>

    <View style={{ flex: 1, padding: 10, }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>{
              onPress(item)
            }}>
              <View style={[styles.container, { backgroundColor: generateColor() }]}>
                <Image source={{ uri: item.Images[1] }} style={styles.img} />
                <View style={{ width: '68%' }}>
                  <Text numberOfLines={1} style={styles.txt}>{item.Title}</Text>
                  <Text numberOfLines={2}>{item.Plot}</Text>
                  <View style={styles.line}>
                    <Text>{item.Released}</Text>
                    <Text>⭐{item.imdbRating}</Text>
                    {/* <Text>{item.imdbRating}</Text> */}
                    <Text>{item.Runtime}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>





          )}
        />
      )}

    </View>
    // </ScrollView>
    // </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    //backgroundColor:"#8ef5fa",
    flexDirection: 'row',

    //justifyContent: "flex-start",
    alignItems: "center",
    //alignItems: 'end',
    height: 130,
    // width: 350,
    //alignContent: 'center',
    // margin: 15,
    marginBottom: 8,
    borderRadius: 15,
    padding: 10
  },
  img: {
    width: 100,
    height: 100,
    // borderWidth: 2,
    // borderColor: '#000000',
    borderRadius: 10,
    // resizeMode: 'stretch',
    margin: 8
  },
  txt: {

    fontWeight: "bold",
    fontSize: 18,
    color: '#ffffff',
    width: "90%"
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    textAlign: 'center',
    // backgroundColor:'yellow'
    // paddingHorizontal:60

  }
});
