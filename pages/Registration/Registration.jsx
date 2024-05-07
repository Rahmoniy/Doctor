import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Auth from '../../Api/Auth';
import { useDispatch } from 'react-redux';

const Registration = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [inputsPassword, setInputsPassword] = useState(true);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const dispatch = useDispatch()


    const handleRegistration = () => {
        setIsLoading(true);
        if (password != 0 && confirmPassword != 0 && phoneNumber != 0 && email != 0) {
            setInputsPassword(true);
            if (password == confirmPassword) {
                setPasswordMatch(true);
                Auth.Singup({ email: email, number: phoneNumber, password: password })
                    .then((res) => {
                        setIsLoading(false);
                        dispatch(setId(res.id));
                        navigation.navigate('Main');
                    })
                    .catch((error) => {
                        setIsLoading(false);
                        console.error('Registration failed:', error);
                    });
            }
            else {
                setPasswordMatch(false);
                setIsLoading(false);
            }
        } else {
            setInputsPassword(false);
            setIsLoading(false);
            console.log("noto`g`ri parol");
        }
    };
    function setId(id) {
        return {
            type: 'SET_ID',
            payload: id
        };
    }

    return (
        <ScrollView>
            <View style={styles.registration}>
                <Image style={{ marginTop: -140 }} source={require('../../assets/LoginHeader.png')} />
                <View style={styles.registration_all}>
                    <Text style={styles.registration_all_textimportant}>Ro'yxatdan o'tish</Text>
                    <View style={styles.registration_all_tdash} />
                    <View style={styles.registration_all_Inputs}>
                        <View style={[styles.registration_all_Inputs_input]}>
                            <Text style={[inputsPassword ? styles.registration_all_Inputs_input_text : styles.errorInput]}>Elektron pochta</Text>
                            <View style={styles.registration_all_Inputs_input_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/email.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.registration_all_Inputs_input_input}
                                placeholder='email'
                                placeholderTextColor="#b3b3b3"
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={[styles.registration_all_Inputs_input]}>
                            <Text style={[inputsPassword ? styles.registration_all_Inputs_input_text : styles.errorInput]}>Telefon raqami</Text>
                            <View style={styles.registration_all_Inputs_input_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/call.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.registration_all_Inputs_input_input}
                                placeholder='+998 99 999 99 99'
                                placeholderTextColor="#b3b3b3"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                        </View>
                        <View style={[styles.registration_all_Inputs_input]}>
                            <Text style={[passwordMatch && inputsPassword ? styles.registration_all_Inputs_input_text : styles.errorInput]}>Parol</Text>
                            <View style={styles.registration_all_Inputs_input_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/password.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.registration_all_Inputs_input_input}
                                secureTextEntry={true}
                                placeholder='*********'
                                placeholderTextColor="#b3b3b3"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={[styles.registration_all_Inputs_input]}>
                            <Text style={[passwordMatch && inputsPassword ? styles.registration_all_Inputs_input_text : styles.errorInput]}>Parolni tasdiqlang</Text>
                            <View style={styles.registration_all_Inputs_input_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/password.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.registration_all_Inputs_input_input}
                                secureTextEntry={true}
                                placeholder='*********'
                                placeholderTextColor="#b3b3b3"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.registration_all_Button}
                        activeOpacity={0.7}
                        onPress={handleRegistration}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Text style={{ color: "white", fontSize: 18 }}>Akkaunt yaratish</Text>
                        )}
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                        <Text style={{ color: "black", fontSize: 17, fontWeight: "400" }}>
                            Allaqachon Akkauntingiz bor!
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: "#190482", fontSize: 17, fontWeight: "bold" }}> Tizimga kirish</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    registration: {
        flex: 1,
    },
    registration_all: {
        width: "100%",
        marginTop: -190,
        paddingLeft: 20,
        paddingRight: 20
    },
    registration_all_textimportant: {
        fontFamily: 'Inter',
        fontSize: 35,
        fontWeight: '500',
        lineHeight: 42.36,
        textAlign: 'left',
        color: 'rgba(28, 28, 28, 1)'
    },
    registration_all_tdash: {
        marginTop: 10,
        width: 100,
        height: 4,
        backgroundColor: "black",
        borderRadius: 150
    },
    registration_all_Inputs: {
        marginTop: 30
    },
    registration_all_Inputs_input: {
        marginTop: 10
    },
    registration_all_Inputs_input_text: {
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: "rgba(28, 28, 28, 1)",
    },
    registration_all_Inputs_input_icon: {
        position: 'absolute',
        top: 43,
        left: 10,
        borderRightWidth: 1,
        borderColor: '#b3b3b3',
        paddingRight: 5
    },
    registration_all_Inputs_input_input: {
        height: 40,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: '500',
        color: "rgba(28, 28, 28, 1)",
        borderBottomWidth: 1,
        borderColor: '#b3b3b3',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingLeft: 40
    },
    registration_all_Button: {
        marginTop: 20,
        backgroundColor: "#190482",
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorInput: {
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: "red"
    }
});

export default Registration;
