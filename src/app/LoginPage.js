import Svg, {Image} from 'react-native-svg';
import {View, Dimensions, StyleSheet, Text, TextInput} from 'react-native';
import { useState} from 'react';
import Checkbox from 'expo-checkbox';



const LoginPage = () =>{
    const {height, width} = Dimensions.get("window");
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.login_text}>
                <Text style={styles.heading}>Login</Text>
            </View>
            <View style={styles.form_and_button}>
                <View style={styles.form_container}>
                    <View style={styles.form_wrapper}> 
                    <TextInput 
                        placeholder='Email'
                        style={styles.input}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Password'/>
                    </View>
                    
                    <View style={styles.instruction_wrapper}>
                        <View style={styles.checkboxContainer}>
                            <Checkbox 
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#4630EB' : undefined}
                            />
                            <Text style={styles.label}>Remember me</Text>
                        </View>
                        <View> 
                            <Text style={styles.forgot_password}>Forgot Password?</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.bottomContainer}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </View>
                </View>
            </View>
        </View>
        
    )

}


const {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({
    login_text:{
        height: height/2
    },
    form_and_button:{
        position: 'relative',
        height: height/2
    },
    form_container:{
       gap: 8 
    },
    form_wrapper:{
        gap: 5
    },
    input:{
        borderColor: 'black',
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    instruction_wrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forgot_password:{
        color:"#5D3EA8",
        fontWeight: "semibold",
        fontSize: 16
    },
    heading:{
        color:"#000000",
        fontSize: 24,
        fontWeight: 'semibold',
    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    container:{
        justifyContent: 'start',
        marginHorizontal:20,
        marginVertical:10,
    },
    button:{
        backgroundColor: '#5D3EA8',
        height:55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white'
    },
    buttonText:{
        color: "#ffffff",
        fontSize: 16,
        fontWeight: 'semibold',
        letterSpacing: 0.5

    },
    bottomContainer:{
        justifyContent: 'center',
    },


})


export default LoginPage