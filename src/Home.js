import React, { Component, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native'

import Header from "./components/Header";
import Card from '../src/components/FoodCard'



const Food = [
  {
    title: "Weight Loss",
    image: require('../src/images/one.png'),
    id: "1"
  },
  {
    title: "Weight Gain",
    image: require('../src/images/two.png'),
    id: "2"
  },
  {
    title: "Weight Loss",
    image: require('../src/images/three.png'),
    id: "3"
  }
]


const { height, width } = Dimensions.get('window')
const setWidth = (w) => (width / 100) * w;

const Home = () => {

  const [data, setData] = useState([1, 1, 1])
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default"
        translucent={false}
        backgroundColor="#3BB0EC"
      />
      <Header />
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.view}>
                <TouchableOpacity>
                  <Image style={styles.image} source={require('../src/images/slide.png')} />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: width,
          justifyContent: "center",
          alignItems: "center",
        }}>
        {
          data.map((item, index) => {
            return (
              <View style={{
                width: currentIndex == index ? 10 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? 'green' : "gray",
                marginLeft: 5
              }}>
              </View>
            )
          })
        }
      </View>
      <FlatList
        data={Food}
        renderItem={({ item }) => {
          return <Card info={item} />
        }}
        keyExtractor={(Food) => Food.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view: {
    width: width,
    height: height / 3
  },
  image: {
    width: setWidth(90),
    height: 200,
    marginLeft: 19,
    marginTop: 20,
    marginRight: 10,
    borderRadius: 20
  },
  mapView: {

  }
});

export default Home;