import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, 
    Image, FlatList, StatusBar} from 'react-native';




const FlatListPage = ({props}) => {

    const [markerCoordinates, setmarkerCoordinates] = useState({props})

    const DATA = markerCoordinates.props

    const Item = ({title, image_url}) => (
        <View style={styles.item}>
            <Image 
                source={{uri:image_url}}
                style={{width: 60, height: 60}}
            />
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
    return (
        <View style={{flex:1}}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.name} image_url={item.image}/>}
                keyExtractor={item => item.id}
                horizontal={true}
                style={styles.flat_list}
                contentContainerStyle={{alignItems: 'center'}}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )



}


const styles = StyleSheet.create({
    item: {
      margin: 5,
      height: 100,
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      borderColor: 'black',
      borderWidth: 2
    //   paddding: 10
    },
    flat_list:{
    },
    title: {
      fontSize: 17,
      backgroundColor: '#f9c2ff',
      marginTop: 5
    },
  });

export default FlatListPage;