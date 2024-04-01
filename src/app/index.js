import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {Link } from 'expo-router';
import UserDetails from '../components/UserDetails'
import LoginPage from "./LoginPage";
import MapArea from "./MapArea";

export default function Page() {
  return (
    <SafeAreaView>
      {/* <LoginPage/> */}
      <MapArea />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 10,
    paddingLeft:0,
    paddingRight:0
  }
});
