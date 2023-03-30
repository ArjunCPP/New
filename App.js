import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AuthProvider } from "./src/context/AuthContext";


import Login from './src/Login';
import Home from './src/Home';
import Meals from "./src/Meals";
import Profile from "./src/Profile";
import More from "./src/More";


const stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Mystack() {
    return (
        <stack.Navigator>
            <stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
            />
            <stack.Screen
                name="MyBottom"
                component={MyBottom}
                options={{ headerShown: false }}
            />
        </stack.Navigator>
    )
}

function MyBottom() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14 },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: "#fff" }
            }}>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarActiveTintColor: "#3BB0EC",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="home" size={24} color="#3BB0EC" /> : <Icon name="home" size={24} color="gray" />
                }} />
            <BottomTab.Screen
                name="Meals"
                component={Meals}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#3BB0EC",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="calendar-today" size={24} color="#3BB0EC" /> : <Icon name="calendar-today" size={24} color="gray" />
                }} />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#3BB0EC",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="person" size={24} color="#3BB0EC" /> : <Icon name="person" size={24} color="gray" />
                }} />
            <BottomTab.Screen
                name="More"
                component={More}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "#3BB0EC",
                    tabBarInactiveTintColor: "gray",
                    tabBarIcon: ({ focused }) =>
                        focused ? <Icon name="more-horiz" size={24} color="#3BB0EC" /> : <Icon name="more-horiz" size={24} color="gray" />
                }} />
        </BottomTab.Navigator>
    )
}

export default function App() {
    useEffect(() => {
        SplashScreen.hide()
    })
    return (
        <NavigationContainer>
            <Mystack />
        </NavigationContainer>
    )
}
