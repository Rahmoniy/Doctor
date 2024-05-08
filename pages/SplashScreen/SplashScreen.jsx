import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/splash_background.png')}
                style={styles.imageStyle}
                resizeMode='contain'
            />
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}>
                    Assalomu aleykum, hush kelibsiz
                </Text>
            </View>
        </View>
    );
};

const { height, width } = Dimensions.get('window');
const imageSize = Math.min(height, width) * 0.7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: imageSize,
        height: imageSize,
    },
    welcomeText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20
    },
});

export default SplashScreen;