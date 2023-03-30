import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Badge } from 'react-native-elements'


const Header = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>IROID</Text>
            <View style={styles.icon}>
            <Icon name="bell" size={40} color="#fff"/>
            </View>
            <Badge
            status='error'
            value="0"
            containerStyle={{position:"absolute", left:352 ,top:35}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
        backgroundColor:"#3BB0EC",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30,
        marginLeft:140,
        marginTop:40
    },
    icon:{
        marginLeft:90
    }
})
export default Header