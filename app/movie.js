import React, { useEffect, useState } from 'react';
import { ActivityIndicator,Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { useSearchParams } from "expo-router";
import Actor from './actor';
export default function movie() {
  const params = useSearchParams();
  const [item, onChangeitem] = useState(null);
  useEffect(() => {
    console.log("fd", params)
    setTimeout(() => {
      onChangeitem(params)
    }, 8000)

  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#E100E1" }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ backgroundColor: "#E100E1",flex:1,justifyContent:'center',alignContent:'center'}}>
          {/* {item} */}
          {(item) ?
            <View  style={styles.main}>
              <Image source={{ uri: item.Images }} style={styles.img} />
              <View >
                <Text style={styles.heading}>{item.Title}</Text>
                <Text style={styles.text}>by {item.Director}</Text>
              </View>
              <View>
                <View style={styles.header}>
                  <Text style={styles.head}>Overview</Text>
                  <Text style={{ color: '#000000' ,fontSize:19 ,fontWeight:'bold'}}>Rating: {item.imdbRating}</Text>
                </View>
                <Text style={styles.txt}>{item.Plot}</Text>
              </View>
              <Actor item={item}/>
              <View>
                <View style={styles.headerStyle}>
                  <Text style={styles.head}>Rated</Text>
                  <Text style={styles.head}>Released</Text>
                  <Text style={styles.head}>Runtime</Text>
                </View>
                <View style={styles.headerStyle}>
                  <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.Rated}/10</Text>
                  <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.Released}/100</Text>
                  <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.Runtime}/100</Text>
                </View>
              </View>
            </View> :
            <ActivityIndicator/>           }
        </View>
      </ScrollView>
    </View>

  );
};
const styles = StyleSheet.create({
  main: {
     width: '100%',
    height: 600,
    padding:20,
    
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  headerStyle: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 14,
    color:'white',
    alignItems:'center',
    justifyContent:'center',
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine:'underline'
  },
  txt: {
    fontSize: 18,
  },
  img: {
    
    width: '90%',
    height: 200,
    borderRadius: 10,
    margin: 8
  },
})