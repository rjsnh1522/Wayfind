import { StyleSheet, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const UserDetails = () => { 

return (

    <View>
        <View style={[styles.wrapper, styles.shadowProp]}>
            <View style={styles.user_image}>
                <Image
                    source={{uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png'}}
                    style={{width: 120, height: 120, resizeMode: 'contain'}}
                />
            </View>
            <View style={styles.user_content}>
                <View style={styles.user_details}>
                    <Text style={styles.title}>Some long name here</Text>
                    <View style={styles.user_direction}> 
                        <Text> Long</Text> 
                        <Text> LAT</Text>
                    </View>
                </View>
                <View>
                    <Icon name="directions" size={40} color="#6540F5" />
                </View>
            </View>
            
        </View>
    </View>
)

}

const styles = StyleSheet.create({
    title:{
        color: "000000",
        fontWeight: 'bold'
    },
    shadowProp:{
        shadowColor: '#52006A',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 20
    },
    wrapper:{
        backgroundColor: 'white',
        flexDirection:'row',
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap:5
    },
    user_image:{
        backgroundColor: 'red',
    },
    user_content:{
        flex: 3,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    user_details:{
        flex:1,
        flexDirection: 'column',
        gap: 5
    },
    user_direction:{
        flexDirection: 'row',
        gap: 5
    }
})

export default UserDetails