import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, 
    Image, FlatList} from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location'; // If using Expo
import FlatListPage from './FlatListPage';

const MapArea = () => {
    const [currentLocation, setCurrentLocation] = useState({
        pickupCords:{
            latitude: 12.8874,
            longitude: 77.5969,
            latitudeDelta: 0.00930,
            longitudeDelta: 0.00930,
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
            coords: { latitude: 12.894, longitude: 77.5969, latitudeDelta: 0.00930, longitudeDelta: 0.0130, },
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
        },
        {
            coords: { latitude: 12.894, longitude: 77.5969, latitudeDelta: 0.00930, longitudeDelta: 0.0130, },
            image: "https://cdn.iconscout.com/icon/free/png-256/free-github-159-721954.png",
            name: "Surabhi",
            id:5
        },
        {
            coords: { latitude: 12.888, longitude: 77.598, latitudeDelta: 0.0130, longitudeDelta: 0.0130, },
            image: "https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png",
            name: "Chotu",
            id:6
        },
    ];

    const getCurrentLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
            }
            let location = await Location.getCurrentPositionAsync({});
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


    return (
            <View style={styles.container}> 
                <View style={styles.map_wrapper}>
                    <MapView
                            initialRegion={currentLocation.pickupCords}
                            style={styles.mapStyle}
                            showsUserLocation={true}
                            provider='google'
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
                                                style={{width: 80, height: 80}}
                                            />
                                    </Marker>
                                ))}
                        </MapView>
                        <View style={styles.re_center}> 
                            <TouchableOpacity 
                            onPress={handlePress} 
                            style={{position: "absolute", bottom: 40, right: 20}}>
                                <View>
                                    <Icon name="my-location" size={40} color="#6540F5"/> 
                                </View>
                            </TouchableOpacity>
                        </View>
                </View>
                <View style={styles.bottomCard}>
                    <FlatListPage props={markerCoordinates} />
                </View>
            </View>


    )
}



const styles = StyleSheet.create({
    bottomCard:{
        backgroundColor: 'green',
        flex:1,
        alignContent: 'center',
        justifyContent: 'center'

    },
    marker_style:{
        height: 80,
        width: 80
    },
    re_center:{
        backgroundColor: 'red',
        // padding: 20
    },
    container:{
        flex: 1,
        flexDirection: 'column'
    },
    map_wrapper:{
    },
    mapStyle:{
        minHeight: '70%',
        minWidth: '100%',
    }


})


export default MapArea