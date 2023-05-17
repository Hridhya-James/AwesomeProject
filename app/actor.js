import { View ,Text,StyleSheet } from "react-native"
export default function Actor({item}) {
    return (
        <View>
            <View>
                <Text style={styles.head}>Actors</Text>
                <Text style={styles.txt}>{item.Actors}</Text>
            </View>
            <View>
                <Text style={styles.head}>Genre</Text>
                <Text style={styles.txt}>{item.Genre}</Text>
            </View>
            <View>
                <Text style={styles.head}>Country</Text>
                <Text style={styles.txt}>{item.Country}</Text>
            </View>
            <View>
                <Text style={styles.head}>Awards</Text>
                <Text style={styles.txt}>{item.Awards}</Text>
            </View>

            <View>
                <View style={styles.headerStyle}>
                    <Text style={styles.head}>IMDb</Text>
                    <Text style={styles.head}>Metacritic</Text>
                    <Text style={styles.head}>IMDbVotes</Text>
                </View>
                <View style={styles.headerStyle}>
                    <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.imdbRating}/10</Text>
                    <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.Metascore}/100</Text>
                    <Text style={{ color: '#0000FF', fontSize: 15 }}>{item.imdbVotes}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
    headerStyle: {
      flexDirection: "row",
      // alignItems:"flex-start",
      justifyContent: 'space-between',
    },
    
    head: {
      fontSize: 22,
      fontWeight: "bold",
      textDecorationLine:'underline'
      //color:'white'
    },
    txt: {
      fontSize: 18,
      // color: 'white',
    },
    img: {
      
      width: '90%',
      height: 200,
      borderRadius: 10,
      margin: 8
    },
  })