import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const HospitalFilter = () => {
    const [selected, setSelected] = useState('left');

    const handleClick = (side) => {
        setSelected(side);
    };

    return (
        <View style={styles.hospitalFilter}>
            <Text style={styles.hospitalFilter_title}>Saralash</Text>
            <View style={styles.hospitalFilter_bunttons}>
                <TouchableOpacity
                    style={[styles.button, selected === 'left' && styles.selectedButton]}
                    onPress={() => handleClick('left')}
                >
                    <Text style={[styles.text, selected === 'left' ? { color: "white" } : { color: "#263257" }]}>Klinikalar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected === 'senter' && styles.selectedButton]}
                    onPress={() => handleClick('senter')}
                >
                    <Text style={[styles.text, selected === 'senter' ? { color: "white" } : { color: "#263257" }]}>Tibiyot
                        birlashmasi</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, selected === 'right' && styles.selectedButton]}
                    onPress={() => handleClick('right')}
                >
                    <Text style={[styles.text, selected === 'right' ? { color: "white" } : { color: "#263257" }]}>Polikliniklar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hospitalFilter_citySelection}>
                <Text style={styles.hospitalFilter_citySelection_text}>Shahar</Text>
                <TouchableOpacity style={styles.hospitalFilter_citySelection_button}>
                    <Text style={styles.hospitalFilter_citySelection_button_text}>Tanlang</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.hospitalFilter_citySelection}>
                <Text style={styles.hospitalFilter_citySelection_text}>Rayon</Text>
                <TouchableOpacity style={styles.hospitalFilter_citySelection_button}>
                    <Text style={styles.hospitalFilter_citySelection_button_text}>Tanlang</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.hospitalFilter_button}>
                <Text style={styles.hospitalFilter_button_text}>davom etish</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    hospitalFilter: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },
    hospitalFilter_title: {
        fontSize: 20,
        marginVertical: 15,
        textAlign: "center",
        fontWeight: "500",
        color: "rgba(35, 47, 85, 1)"
    },
    hospitalFilter_bunttons: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 12,
        borderColor: "DDDDDD",
        borderWidth: 3
    },
    button: {
        width: 100,
        backgroundColor: 'white',
        justifyContent: "center",
    },
    selectedButton: {
        backgroundColor: '#190482',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    hospitalFilter_citySelection: {
        width: "100%",
        height: 100,
        marginTop: 15,
        paddingLeft: 30,
        paddingRight: 30
    },
    hospitalFilter_citySelection_text: {
        fontFamily: "Poppins-Regular",
        fontSize: 20,
        color: "#263257",
    },
    hospitalFilter_citySelection_button: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#190482",
        borderRadius: 50
    },
    hospitalFilter_citySelection_button_text: {
        fontSize: 30,
        color: "white"
    },
    hospitalFilter_button: {
        width: 350,
        height: 55,
        backgroundColor: "#190482",
        flexDirection: "row",
        justifyContent: "center",
        padding: 14,
        borderRadius: 50,
    },
    hospitalFilter_button_text: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
        color: "white"
    }
});

export default HospitalFilter;
