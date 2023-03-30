import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ImageBackground,
    TouchableHighlight
} from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

const FoodCard = (props) => {
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>

                <ImageBackground
                    style={styles.imageStyle}
                    source={props.info.image}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text}>{props.info.title}</Text>
                        <TouchableHighlight style={styles.iconView}>
                            <Icon name="keyboard-arrow-up" size={36} color="#3BB0EC" />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.cardView}>
                    </View>
                </ImageBackground>

            </View>
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container1: {
        width: deviceWidth - 25,
        height: 160,
        marginTop: 20,
        marginLeft: 13,
    },
    container2: {
        width: "100%",
        height: 150,
        borderRadius: 20
    },
    imageStyle: {
        width: "100%",
        height: 150,
    },
    cardView: {
        width: 350,
        backgroundColor: "#F2F2F2",
        marginTop: 100,
        height: 40,
        opacity: 0.5,
        position: "absolute",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 12,
    },
    text: {
        marginTop: 104,
        marginLeft: 40,
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        elevation:5
    },
    iconView: {
        backgroundColor: "#fff",
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: 104,
        marginLeft: 140,
        elevation: 10,
        alignItems: "center",
        justifyContent: "center"
    },
})


export default FoodCard;