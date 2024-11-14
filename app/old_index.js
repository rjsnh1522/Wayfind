import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {Link } from 'expo-router';
// import UserDetails from '../components/UserDetails'
// import LoginPage from "./LoginPage";
// import MapArea from "./MapArea";
// import FlatListPage from "../components/FlatListPage";
// import AuthScreens from "../screens/AuthScreen";
// import ScreenWrapper from "../app/ScreenWrapper"
// import Sandbox from "./Sandbox";


// const Stack = createStackNavigator();

export default function Page() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Login" component={AuthScreens} />
    //     <Stack.Screen name="MapArea" component={MapArea} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      <Link replace href="/login" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
      
      <Link href="/user/bacon">View user</Link>

    </View>
  );
}
