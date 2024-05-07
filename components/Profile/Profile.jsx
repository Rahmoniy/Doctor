import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { getTextColorkiss, getBackBackgroundColor } from '../../Redux/functions/functions';
import { useSelector } from 'react-redux';

const Profile = () => {
    const isConnected = useSelector(state => state.isConnected);
    const backgroundColor = getBackBackgroundColor(isConnected);
    const getTextColor = getTextColorkiss(isConnected);

    let name = "Muhammad";
    let email = "email@example.com";

    return (
        <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/user_logo_boy.png')}
                />
                <View style={styles.textContainer}>
                    <Text style={{ ...styles.name, color: getTextColor }}>Salom {name}🖐</Text>
                    <Text style={{ ...styles.email, color: getTextColor }}>{email}</Text>
                </View>
            </View>
            <View style={styles.rowCard}>
                <View style={styles.card}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "72%" }}>
                        <Image style={styles.cardImage} source={require('../../assets/data_user.png')} />
                        <Text style={styles.cardText}>Malumotlarimni o`zgartiraman </Text>
                    </View>
                    <Image style={styles.cardImage} source={require('../../assets/right_arrow.png')} />
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "72%" }}>
                        <Image style={styles.cardImage} source={require('../../assets/data_user.png')} />
                        <Text style={styles.cardText}>Malumotlarimni o`zgartiraman </Text>
                    </View>
                    <Image style={styles.cardImage} source={require('../../assets/right_arrow.png')} />
                </View>
                <View style={styles.card}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "72%" }}>
                        <Image style={styles.cardImage} source={require('../../assets/data_user.png')} />
                        <Text style={styles.cardText}>Malumotlarimni o`zgartiraman </Text>
                    </View>
                    <Image style={styles.cardImage} source={require('../../assets/right_arrow.png')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20,
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20,
    },
    textContainer: {
        flexDirection: "column",
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 15,
    },
    rowCard: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 45
    },
    card: {
        width: "100%",
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#F9E8C9',
        padding: 6,
        elevation: 1,
        borderWidth: 4,
        borderColor: "#FFD23F",
        borderRadius: 10
    },
    cardText: {
        color: "black",
    },
    cardImage: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
});

export default Profile;