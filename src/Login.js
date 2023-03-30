import React,{useState,useContext, useEffect} from "react";
import{
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  StatusBar
}from "react-native"
import Axios from 'react-native-axios'

const LoginScreen = ({navigation}) => {

  useEffect(() => {
    Axios.get ('http://proteinium.iroidtechnologies.in/api/v1/login')
 .then(res => console.log(res.data))
  })

  const [userName,setUserName] = useState(null);
  const [password,setPassword] = useState(null);
  

    return(
      <View style={styles.container}>
        <StatusBar 
      barStyle='dark-content' 
      translucent={false} 
      backgroundColor="#fff"
      />
        <TouchableHighlight>
        <Text style={styles.textSkip}>Skip</Text>
        </TouchableHighlight>
        <View style={styles.view1}>
           <Text style={styles.textSignIn}>Sign In</Text>
           <Text style={styles.textDetails}>Enter Your Detais</Text>
           </View>
           <View style={styles.view2}>
              <TextInput style={styles.textInput1}
              placeholder="User Name"
              value={userName}
              onChangeText={text => setUserName(text)}
              placeholderTextColor={"#B6B7B7"}
              />
              <TextInput style={styles.textInput2}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              placeholderTextColor={"#B6B7B7"}
              />
            <TouchableHighlight style={styles.touchableHighlight}
            underlayColor="#ADD8E6"
            onPress={()=> navigation.navigate("MyBottom")}>
              <Text style={styles.touchableHighlightText}>Sign In</Text>
            </TouchableHighlight>
            </View>
            <TouchableHighlight>
              <Text style={styles.forgotPass}>Forgot your password?</Text>
            </TouchableHighlight>
            <View style={styles.view3}>
            <Text style={styles.view3Text}>Don't have an Account?</Text>
            <TouchableHighlight>
              <Text style={styles.lastSingnUp}>SignUp</Text>
            </TouchableHighlight>
            </View>
      </View>
    )
  }


const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff"
  },
  textSkip:{
    marginTop:20,
    marginLeft:330,
    color:"#000",
    fontWeight:"bold",
    opacity:0.6
  },
  view1:{
    marginTop:150,
    marginLeft:139
  },
  textSignIn:{
    fontSize:33,
    fontWeight:"bold",
    color:"#000"
  },
  textDetails:{
    marginTop:10,
  },
  view2:{
    marginLeft:40,
    marginTop:40
  },
  textInput1:{
    height:50,
    width:307,
    borderRadius:28,
    backgroundColor:"#F2F2F2",
    paddingLeft:30
  },
  textInput2:{
    marginTop:20,
    height:50,
    width:307,
    borderRadius:28,
    backgroundColor:"#F2F2F2",
    paddingLeft:30
  },
  touchableHighlight:{
    marginTop:20,
    height:50,
    width:307,
    borderRadius:28,
    backgroundColor:"#3BB0EC",
    alignItems:"center",
    justifyContent:"center"
  },
  touchableHighlightText:{
    color:"#fff",
    fontSize:15
  },
  forgotPass:{
    marginTop:25,
    color:"#444444",
    marginLeft:134,
    fontSize:15
  },
  view3:{
    marginLeft:110,
    flexDirection:"row",
    marginTop:15
  },
  lastSingnUp:{
    color:"#5DA7A3",
    marginLeft:5,
    fontWeight:"bold"
  }
})



export default LoginScreen;