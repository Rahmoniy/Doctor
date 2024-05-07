import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { get } from "lodash";

const CardDoctor = (props) => {
    // const [boolean, setBoolean] = useState(true);
    const navigation = useNavigation()
    const prosp = props?.state?.item
    const Dot = ({ focused }) => (
        <View
            style={{
                position: "absolute",
                width: 13, // Nuqta o'lchami
                height: 13, // Nuqta balandligi
                top: 6,
                left: 53,
                borderRadius: 10, // Nuqta radiusi (eng/bo'yi)
                backgroundColor: focused ? "#8EF4BC" : "#ccc", // Nuqta rangi, focused bo'lsa "#8EF4BC" rangni ko'rsat, aks holda "#ccc" rangni ko'rsat
            }}
        />
    );

    const handleButtonClick = (params) => {
        // console.log(params);
        navigation.navigate('DrInformation', { id: params ? params : '' });
    };



    return (
        <View style={styles.container}>
            <View style={styles.CardDoctor}>
                <View style={styles.CardDoctor_left}>
                    <View style={styles.CardDoctor_left_imguser}>
                        <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={prosp ? { uri: prosp.img } : require("../../assets/Drimg.png")} />
                        <Dot focused={prosp && get(prosp, 'BooleanDoctor', '')} />
                    </View>
                    <View style={styles.CardDoctor_left_star}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/Star.png')} />
                        <Text style={styles.ratingText}>{prosp && prosp.level}</Text>
                    </View>
                </View>
                <View style={styles.CardDoctor_right}>
                    <Text style={styles.CardDoctor_right_doctorName}>{prosp ? prosp.name : 'Muhammad Doc'}</Text>
                    <Text style={styles.CardDoctor_right_doctorInfo}>{prosp && prosp.Address}</Text>
                    <TouchableOpacity style={styles.CardDoctor_right_button} onPress={() => { handleButtonClick(props ? prosp.id : 1) }}>
                        <Text style={styles.CardDoctor_right_buttonText}>Uchrashuv</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    CardDoctor: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'rgba(247, 248, 248, 1)',
    },
    CardDoctor_left: {
        width: 70,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    CardDoctor_left_imguser: {
        width: 65,
        height: 65,
        borderRadius: 30,
        backgroundColor: "rgba(179, 147, 255, 1)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CardDoctor_left_star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
    },
    ratingText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 15, // Bu o'rniga ma'lumotli qiymat qo'yish kerak
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    CardDoctor_right: {
        width: 230,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
    },
    CardDoctor_right_doctorName: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    CardDoctor_right_doctorInfo: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.02,
        color: "rgba(125, 139, 183, 1)"
    },
    CardDoctor_right_button: {
        backgroundColor: '#F7F8F8',
        borderRadius: 10,
        height: 30,
        paddingHorizontal: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    CardDoctor_right_buttonText: {
        height: 40,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 35, // Bu o'rniga ma'lumotli qiymat qo'yish kerak
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "#222E54"
    }
});


export default CardDoctor;
