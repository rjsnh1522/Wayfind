import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {Link } from 'expo-router';
import UserDetails from '../components/UserDetails'
import LoginPage from "./LoginPage";
import MapArea from "./MapArea";
import FlatListPage from "./FlatListPage";
import Sandbox from "./Sandbox";

export default function Page() {
  return (
    <SafeAreaView style={{flex:1}}>
      <MapArea />
      </SafeAreaView>
      //   <LoginPage/>
      // <Sandbox />
  );
}
