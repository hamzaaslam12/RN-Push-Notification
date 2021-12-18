import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import { Dismiss } from './LoginScreen';

const Dismiss = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


const SignInScreen = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        changeTextStatus: false,
        changeSecureTextEntry: true,
        changeConfirmSecureTextEntry: true,
    })

    const textInputStatus = (value) => {

        if (value.length !== 0) {
            setData({
                ...data,
                email: value,
                changeTextStatus: true
            })
        }
        else {
            setData({
                ...data,
                email: value,
                changeTextStatus: false
            })
        }
    }

    const handlePassword = (value) => {
        setData({
            ...data,
            password: value
        })
    }
    const handleConfirmPassword = (value) => {
        setData({
            ...data,
            password: value
        })
    }

    const secureTextStatus = () => {

        setData({
            ...data,
            changeSecureTextEntry: !data.changeSecureTextEntry
        })
    }

    const secureConfirmTextStatus = () => {

        setData({
            ...data,
            changeConfirmSecureTextEntry: !data.changeConfirmSecureTextEntry
        })
    }

    return (
<Dismiss>
<View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.text_header}>REGISTER NOW</Text>
            </View>

            <View style={styles.footer}>

                {/* EMAIL TEXT FIELD WITH THE ICONS AT START AND AT THE END */}
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                    name='user-o'
                    color= '#05375a'
                    size= {20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(value) => textInputStatus(value)}
                    />

                    {
                        data.changeTextStatus ?

                            <Feather 
                            name= 'check-circle'
                            color= 'green'
                            size= {20}
                            /> 
                            : null

                    }

                </View>

                {/* PASSWORD TEXT FIELD WITH THE ICONS AT START AND AT THE END */}
                <Text style={[styles.text_footer, { marginTop: 40 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                    name='lock'
                    color= '#05375a'
                    size= {20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={data.changeSecureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(value) => handlePassword(value)}
                    />

                    {data.changeSecureTextEntry ?
                    
                    <Feather 
                     name= 'eye-off'
                     color= 'grey'
                     size= {20}
                     onPress={() => secureTextStatus()}
                     />
                
                        : 
                        <Feather 
                        name= 'eye'
                        color= 'grey'
                        size= {20}
                        onPress={() => secureTextStatus()}
                        />
   
                    }

                </View>

                {/* PASSWORD TEXT FIELD WITH THE ICONS AT START AND AT THE END */}
                <Text style={[styles.text_footer, { marginTop: 40 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                    name='lock'
                    color= '#05375a'
                    size= {20}
                    />
                    <TextInput
                        placeholder='Confirm Your Password'
                        secureTextEntry={data.changeConfirmSecureTextEntry ? true : false}
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(value) => handleConfirmPassword(value)}
                    />

                    {data.secureConfirmTextStatus ?
                    
                    <Feather 
                     name= 'eye-off'
                     color= 'grey'
                     size= {20}
                     onPress={() => secureConfirmTextStatus()}
                     />
                
                    : 
                    <Feather 
                     name= 'eye'
                     color= 'grey'
                     size= {20}
                     onPress={() => secureConfirmTextStatus()}
                     />
                }

                </View>

                <View style={styles.button}>

                    <TouchableOpacity style={[styles.signIn, {
                        backgroundColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15,
                        marginBottom: 10
                    }]}>
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15,
                        marginTop: '5%'
                    }]}>
                        <Text style={[styles.textSign, {
                            color: '#009387',
                        }]}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        </Dismiss>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30

    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 17
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        // flexDirection: 'row',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})