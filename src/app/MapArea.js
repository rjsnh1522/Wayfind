import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, 
    Image, FlatList, Item} from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location'; // If using Expo

const MapArea = () => {
    const [currentLocation, setCurrentLocation] = useState({
        pickupCords:{
            latitude: 12.8874,
            longitude: 77.5969,
            latitudeDelta: 0.0130,
            longitudeDelta: 0.0130,
        }
    });

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const handlePress = () => {
        getCurrentLocation();
    };

    const handMarkerOnPress = (coords, id, key) => {
        console.log("marker pressed", coords, id, key)

    }

    const markerCoordinates = [
        {
            coords: { latitude: 12.894, longitude: 77.5969, latitudeDelta: 0.0130, longitudeDelta: 0.0130, },
            image: "https://cdn.iconscout.com/icon/free/png-256/free-github-159-721954.png",
            name: "Pawan",
            id:1
        },
        {
            coords: { latitude: 12.888, longitude: 77.598, latitudeDelta: 0.0130, longitudeDelta: 0.0130, },
            image: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
            name: "Sandeep",
            id:2
        },
        {
            coords: { latitude: 12.889, longitude: 77.599, latitudeDelta: 0.0130, longitudeDelta: 0.0130, },
            image: "https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png",
            name: " Nitesh",
            id:3
        },
        {
            coords: { latitude: 12.8885278, longitude: 77.6048097, latitudeDelta: 0.0130, longitudeDelta: 0.0130, },
            image: "https://cdn-icons-png.flaticon.com/512/219/219969.png",
            name: "Choti",
            id:4
        }
    ];

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    const getCurrentLocation = async () => {
        console.log("Setting current location........")
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log("status ", status)
            if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
            }
            console.log("I am herere..........")
            let location = await Location.getCurrentPositionAsync({});
            console.log("location", location)
            setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0130,
            longitudeDelta: 0.0130,
            });
        } catch (error) {
            console.error('Error getting current location:', error);
        }
    };



    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.bottomCard}>
                {/* <Text>asdasdas</Text> */}
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                />
            </View>
            {/* <View style={{position: 'relative', flex:1}}> */}
                {/* <MapView
                    initialRegion={currentLocation.pickupCords}
                    style={styles.mapStyle}
                    showsUserLocation={true}
                >
                    {markerCoordinates.map((data, index) => (
                        <Marker
                            key={index} 
                            coordinate={data.coords}
                            style={styles.marker_style}
                            title={data.name}
                            draggable={false}
                            onPress={handMarkerOnPress(data.coords, data.id, index)}
                            >
                                <Image
                                    source={{uri:data.image}}
                                    style={{width: 120, height: 120}}
                                />
                        </Marker>
                    ))}
                        
                    
                </MapView> */}
                
                {/* <View style={styles.re_center}> */}
                    {/* <TouchableOpacity onPress={handlePress} style={{position: "absolute", bottom: 200, right: 100}}>
                        <View>
                            <Icon name="my-location" size={40} color="#6540F5"/> 
                        </View>
                    </TouchableOpacity> */}
                {/* </View> */}
            {/* </View>  */}
        </View>

    )
}



const styles = StyleSheet.create({
    title:{
        fontSize: 32,
    },
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    bottomCard:{
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 5,
        width: '100%',
        flex: 1,
        position: 'relative'

    },
    marker_style:{
        height: 500,
        width: 500
    },
    re_center:{
        position: "absolute", 
        bottom: 200, 
        right: 100
    },
    self_center:{
        position: 'relative',
        bottom: 20,
        right: 30
    },
    container:{
        flex: 1,
    },
    mapStyle:{
        minHeight: Dimensions.get('window').height * 0.5,
        minWidth: Dimensions.get('window').width,
        flex:1
    }


})


export default MapArea