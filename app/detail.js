import React from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
export default function App() {
    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmpassword,setConfirmPassword] = React.useState('');
    const storeData = async (user ,pass) => {
      try {
        const userObj= JSON.stringify({username:user,password:pass})
        await AsyncStorage.setItem('Userdetail',userObj)
      } catch (e) {
        alert('error saving email')
      }
    }
    const onlogin=() =>{
        console.log(username,password,confirmpassword)
        const strongRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        //const strongRegex =  reg [] ;
        if (username === "" || password === "" || confirmpassword === "") {
          if(username === ""){
            alert('email address must be entered')
          }
          else if(password === ""){
            alert('password must be entered')
          }
          else{
            alert('password must be entered')
          }  
        }
        else if ( !strongRegex.test(username) || password.length < 8 || confirmpassword !==password) {
          if(!strongRegex.test(username)){
            alert('Email is Not Correct')
          }
          else if(password.length < 8){
            alert('password must have atleast 8 characters')
          }
          else{
            alert('you have entered wrong password')
          }
        }
        else {
          storeData(username,password)
          //router.push("home")
        }
       

    }
    
      
      
    
    /*const SigninPage = ({ navigation }) => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      
      const signIn = () => {                          
          
      
          if (!strongRegex.test(email)) {
              showMessage(MESSAGE.email)
              return false;
          } else if (password.length < 8) {
              showMessage(MESSAGE.password);
              return false;
          }
      }*/
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
        <Text style={styles.title}>SIGN UP PAGE</Text>
          <Text style={styles.subtitle}>    Email</Text>
          <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={setUsername}
          value={username}
        />
          <Text style={styles.subtitle}>    Password</Text>
          <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={setPassword}
          value={password}
        />
        <Text style={styles.subtitle}>    Confirm Password</Text>
          <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          onChangeText={setConfirmPassword}
          value={confirmpassword}
        />
          <Button
          title="SIGN UP"
          onPress={() =>{
            
            onlogin()
          }
          }
        />
        <View style={styles.fixToText}>
          <Text style={styles.sub}>Already have an account?</Text>
          <Text style={styles.sign} onPress={() => router.push("")}>Login</Text>
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
      padding: 100,
    },
    main: {
      
      justifyContent: "center",
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
      margin: 2,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12,
      color: "#38434D",
      fontWeight: "bold",
    },
    sub: {
        
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        color: "#38434D",
    },
    fixToText: {
      flexDirection: 'row',
      //justifyContent: 'space-between',
      alignItems: "center",
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
