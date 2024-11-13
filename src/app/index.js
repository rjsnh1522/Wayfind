import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Link } from 'expo-router';
import UserDetails from '../components/UserDetails'
import LoginPage from "./LoginPage";
import MapArea from "./MapArea";
import FlatListPage from "./FlatListPage";
import AuthScreens from "../screens/AuthScreen";
import ScreenWrapper from "../app/ScreenWrapper"
// import Sandbox from "./Sandbox";


const Stack = createStackNavigator();

export default function Page() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={AuthScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // {/* <SafeAreaView style={{flex:1}}>
    //   {/* <MapArea /> */}
    //   <AuthScreen />
    //   </SafeAreaView>
    //   //   <LoginPage/>
    //   // <Sandbox /> */}
  );
}
