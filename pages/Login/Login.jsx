import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Auth from '../../Api/Auth';
import { useDispatch } from 'react-redux';


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const dispatch = useDispatch()

    const toggleImage = () => {
        setRememberMe(!rememberMe);
    }

    const handleLogin = async () => { // async kalit so'zini qo'shing
        setIsLoading(true);

        Auth.Login(email, password)
            .then(async (res) => { // async kalit so'zini qo'shing
                let data = res.find(item => item.email === email && item.parol === password);
                // console.log(data);
                if (data) {
                    dispatch(setId(data.id));
                    setIsLoading(false)
                    navigation.navigate('Main');
                } else {
                    setIsLoading(false)
                    // Aks holda, foydalanuvchiga xato xabarini ko'rsatishingiz mumkin
                    alert(`Noto\'g\'ri email yoki parol ${rememberMe}`);
                }
            })
    }
    function setId(id) {
        return {
            type: 'SET_ID',
            payload: id
        };
    }
    return (
        <ScrollView>
            <View style={styles.login}>
                <Image style={{ marginTop: -50, width: "100%" }} source={require('../../assets/LoginHeader.png')} />
                <View style={styles.login_all}>
                    <Text style={styles.login_all_textimportant}>Tizimga kirish</Text>
                    <View style={styles.login_all_tdash} />
                    <View style={styles.login_all_Input}>
                        <View style={styles.login_all_Input_email}>
                            <Text style={styles.login_all_Input_email_text}>Elektron pochta</Text>
                            <View style={styles.login_all_Input_email_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/email.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.login_all_Input_email_input}
                                placeholder='email'
                                placeholderTextColor="#b3b3b3"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.login_all_Input_email}>
                            <Text style={styles.login_all_Input_email_text}>Parol</Text>
                            <View style={styles.login_all_Input_email_icon}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={require('../../assets/password.png')}
                                />
                            </View>
                            <TextInput
                                style={styles.login_all_Input_email_input}
                                secureTextEntry={true}
                                placeholder='*********'
                                placeholderTextColor="#b3b3b3"
                                value={password}
                                onChangeText={text => setPassword(text)}
                            />
                        </View>
                        <View style={styles.login_all_Input_email_checkbox}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity onPress={toggleImage}>
                                    <Image source={rememberMe ? require('../../assets/check.png') : require('../../assets/no_check.png')} style={{ width: 35, height: 35 }} />

                                </TouchableOpacity>
                                <Text style={{ color: "#1C1C1C", fontSize: 14 }}>Meni eslab qolish</Text>
                            </View>
                            <Text style={{ color: "#190482", fontSize: 14, fontWeight: "bold" }}>Parolni unutdingizmi ?</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.login_all_Button}
                        activeOpacity={0.7}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Text style={{ color: "white", fontSize: 18 }}>Tizimga kirish</Text>
                        )}
                    </TouchableOpacity>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                        <Text style={{ color: "black", fontSize: 17, fontWeight: "400" }}>
                            Akkauntingiz yo`qmi ?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                            <Text style={{ color: "#190482", fontSize: 17, fontWeight: "bold" }}> Ro'yxatdan o'tish</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    login: {
        flex: 1
    },
    login_all: {
        width: "100%",
        marginTop: -190,
        paddingLeft: 20,
        paddingRight: 20
    },
    login_all_textimportant: {
        fontFamily: 'Inter',
        fontSize: 35,
        fontWeight: '500',
        lineHeight: 42.36,
        textAlign: 'left',
        color: 'rgba(28, 28, 28, 1)'
    },
    login_all_tdash: {
        marginTop: 10,
        width: 100,
        height: 4,
        backgroundColor: "black",
        borderRadius: 150
    },
    login_all_Input: {
        marginTop: 30
    },
    login_all_Input_email: {
        marginTop: 10
    },
    login_all_Input_email_text: {
        fontFamily: 'Inter',
        fontSize: 22,
        fontWeight: '500',
        textAlign: 'left',
        color: "rgba(28, 28, 28, 1)",
    },
    login_all_Input_email_icon: {
        position: 'absolute',
        top: 43,
        left: 10,
        borderRightWidth: 1,
        borderColor: '#b3b3b3',
        paddingRight: 5
    },
    login_all_Input_email_input: {
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
    login_all_Input_email_checkbox: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    login_all_Button: {
        marginTop: 20,
        backgroundColor: "#190482",
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Login;
