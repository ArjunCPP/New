import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Text
}from 'react-native'

class Profile extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
      
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
   }
});

export default Profile;