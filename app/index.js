import React,{useEffect} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import { useRouter } from "expo-router";
//const image = {};
import AsyncStorage from '@react-native-async-storage/async-storage';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default function Page() {
  const router = useRouter();
  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');
  

  useEffect(()=>{
    //getData()//
    // router.push("home")

  },[])
  const getData = async () => {
    try {
       const value = await AsyncStorage.getItem('Userdetail')
       console.log('yyyyy',value)
       return value != null ? JSON.parse(value) : null;
       
    } catch(e) {
      alert('email is not found')
    }
   }
  const onlogin =async ()=>{
     // if abc@gmail.com and pass is 12345678 
     // userobj = {username:'dfghj',password:'123456'}
     router.push("home")

   let userobj =await getData();
  
   console.log("",userobj,text,text1)
    
     if(text !== userobj?.username && text1 !== userobj?.password){
       alert('Incorect Email and Password')     
     }
    else if(text.trim() !== userobj?.username){
      alert('Incorect Email')
    }
    else if (text1 !== userobj?.password){
      alert('Incorect Password')
    }
    else{
      
      router.push("home")
    }
    
  }
  return (
   <View>
    
    <ImageBackground
        source={{
          uri: 
'https://images.pexels.com/photos/4466461/pexels-photo-4466461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        resizeMode="cover"
        style={styles.img}>
      <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.title}>LOGIN PAGE</Text>
        <Text style={styles.subtitle}>     Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={(t)=>{
          onChangeText(t)
        }}
        placeholder='Email'
        value={text}
      />
        <Text style={styles.subtitle}>     Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        placeholder='Password'
        value={text1}
      />
        <Button
        title="LOGIN"
        onPress={() =>{
          //  router.push("home")
          onlogin()
        }
        }
      />
      <View style={styles.fixToText}>
        <Text style={styles.sub}>Don't have an account?</Text>
        <Text style={styles.sign} onPress={() => router.push("detail")}>Sign Up</Text>
      </View>
        
      </View>
      </View>
      </ImageBackground>
    
   </View> 
    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  main: {
    justifyContent: "center",
    //alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    textAlign: 'center',
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: "#38434D",
    fontWeight: "bold",
  },
  sub: {
    
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "#38434D",
  },
  fixToText: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 50,
    width: 270,
    margin: 15,
    borderWidth: 2,
    padding: 10,
  },
  sign: {
    color: "#38434D",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
//const router = useRouter();
//const Separator = () => <View style={styles.separator} />;
/*const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() => router.push("home")}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.
      </Text>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});*/

//export default App;