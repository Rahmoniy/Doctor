import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const HospitalTotal = () => {
    const [showClearIcon, setShowClearIcon] = useState(false);
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation()

    // getting value from redux state
    const handleButtonClick = () => {

    };
    const handleSearchChange = (text) => {
        setSearchText(text);
        setShowClearIcon(text.length > 0);;
    };
    const resetFilter = () => {
        setSearchText('');
        setShowClearIcon(false);
    };

    return (
        <View style={styles.hospitalTotal}>
            <Text style={styles.hospitalTotal_title}>Kilinika va Polklinika hamda Tibbiyot Malumotlar</Text>
            <View style={styles.hospitalTotal_textvsinput_search}>
                <Image source={require('../../assets/search_icon.png')} style={styles.hospitalTotal_textvsinput_search_searchIcon} />
                <TextInput
                    style={styles.hospitalTotal_textvsinput_search_searchInput}
                    placeholder="Search..."
                    placeholderTextColor="black"
                    onChangeText={(val) => { handleSearchChange(val) }}
                    value={searchText}
                />
                {showClearIcon && ( // Conditionally render clear icon
                    <TouchableOpacity onPress={resetFilter}>
                        <Image
                            source={require('../../assets/clear_icon.png')} // Replace with your clear icon image
                            style={styles.hospitalTotal_textvsinput_search_clearIcon}
                            onPress={resetFilter}
                        />
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity onPress={() => handleButtonClick(navigation.navigate('HospitalFilter'))} style={styles.hospitalTotal_filterCard}>
                <Text style={styles.hospitalTotal_filterCard_text}>Saralash</Text>
                <Image
                    source={require('../../assets/right_arrow.png')}
                    style={{ width: 40, height: 20 }}
                />
            </TouchableOpacity>
            <ScrollView
                style={styles.hospitalTotal_scrollView}>
                {
                    [0, 1, 2, 3, 4, 5].map((res, i) => {
                        return (
                            <View key={i} style={styles.hospitalTotal_card}>
                                <Image style={{ width: 90, height: 90 }} source={require("../../assets/hospital.png")} />
                                <View style={styles.hospitalTotal_card_right}>
                                    <Text style={styles.hospitalTotal_card_right_doctorName}>37-Oilaviy Polklinika</Text>
                                    <Text style={styles.hospitalTotal_card_right_doctorInfo}>Ташкент, Чиланзарский район, 1-й пр. Катартал, 1</Text>
                                    <TouchableOpacity style={styles.hospitalTotal_card_right_button} onPress={() => { navigation.navigate('HospitalInformation') }}>
                                        <Text style={styles.hospitalTotal_card_right_buttonText}>Toliq Malumot</Text>
                                    </TouchableOpacity>
                                    <View style={styles.hospitalTotal_card_right_star}>
                                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/Star.png')} />
                                        <Text style={styles.ratingText}>4.8</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    hospitalTotal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",

    },
    hospitalTotal_title: {
        fontSize: 20,
        textAlign: "center",
        color: "#232F55",
        fontWeight: "500"
    },
    hospitalTotal_textvsinput_search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20
    },
    hospitalTotal_textvsinput_search_searchIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    hospitalTotal_textvsinput_search_searchInput: {
        flex: 1,
        fontSize: 16,
        color: 'black'
    },
    hospitalTotal_textvsinput_search_clearIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    hospitalTotal_filterCard: {
        width: "90%",
        height: 40,
        backgroundColor: "#ffff",
        borderRadius: 10,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20
    },
    hospitalTotal_filterCard_text: {
        fontSize: 16,
        color: "rgba(38, 50, 87, 1)"
    },
    hospitalTotal_scrollView: {
        height: "76%"
    },
    hospitalTotal_card: {
        height: 133,
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
    hospitalTotal_card_left: {
        width: 70,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    hospitalTotal_card_right: {
        width: 230,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
        position: "relative"
    },
    hospitalTotal_card_right_doctorName: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    hospitalTotal_card_right_doctorInfo: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.02,
        color: "rgba(125, 139, 183, 1)"
    },
    hospitalTotal_card_right_button: {
        backgroundColor: '#F7F8F8',
        borderRadius: 10,
        height: 30,
        paddingHorizontal: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    hospitalTotal_card_right_buttonText: {
        height: 40,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 35, // Bu o'rniga ma'lumotli qiymat qo'yish kerak
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "#222E54"
    },
    hospitalTotal_card_right_star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
        position: "absolute",
        bottom: 12,
        right: 0
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
});

export default HospitalTotal;
