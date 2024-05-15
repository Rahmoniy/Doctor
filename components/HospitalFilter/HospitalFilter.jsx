import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const HospitalFilter = () => {
    const [selected, setSelected] = useState('left');
    const [showCityList, setShowCityList] = useState(false);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [showDistrictList, setShowDistrictList] = useState(false);
    const navigation = useNavigation()

    const handleClick = (side) => {
        setSelected(side);
    };
    const toggleDistrictList = () => {
        setShowDistrictList(!showDistrictList);
    };
    const handleCitySelection = (city) => {
        setSelectedCity(city);
        setShowCityList(false);
    };

    const toggleCityList = () => {
        setShowCityList(!showCityList);
    };

    const handleDistrictSelection = (district) => {
        setSelectedDistrict(district);
        setShowDistrictList(false); // İlçe seçildiğinde ilçe listesini gizle
    };
    const keepGoingFilter = () => {
        if (!selectedCity || !selectedDistrict) return;
        let selectedValue;
        switch (selected) {
            case 'left':
                selectedValue = "Klinika";
                break;
            case 'senter':
                selectedValue = "Tibiyot birlashmasi";
                break;
            case 'right':
                selectedValue = "Poliklinika";
                break;
        }
        navigation.navigate("HospitalTotalsScreen", { city: selectedCity, district: selectedDistrict, selected: selectedValue });
    }


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
                    style={[styles.button, selected === 'center' && styles.selectedButton]}
                    onPress={() => handleClick('center')}
                >
                    <Text style={[styles.text, selected === 'center' ? { color: "white" } : { color: "#263257" }]}>Tibiyot
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
                <TouchableOpacity style={styles.hospitalFilter_citySelection_button} onPress={toggleCityList}>
                    <Text style={styles.hospitalFilter_citySelection_button_text}>{selectedCity || 'Tanlang'}</Text>
                </TouchableOpacity>
                {showCityList && (
                    <View style={styles.cityList}>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Toshkent sh')}>
                            <Text style={styles.cityListItem}>Toshkent sh</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Toshkent v')}>
                            <Text style={styles.cityListItem}>Toshkent v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Samarqand v')}>
                            <Text style={styles.cityListItem}>Samarqand v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Qashqadaryo v')}>
                            <Text style={styles.cityListItem}>Qashqadaryo v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Andijon v')}>
                            <Text style={styles.cityListItem}>Andijon v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Buxoro v')}>
                            <Text style={styles.cityListItem}>Buxoro v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Fargʻona v')}>
                            <Text style={styles.cityListItem}>Fargʻona  v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Jizzax v')}>
                            <Text style={styles.cityListItem}>Jizzax  v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Xorazm v')}>
                            <Text style={styles.cityListItem}>Xorazm  v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Namangan v')}>
                            <Text style={styles.cityListItem}>Namangan  v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Navoiy v')}>
                            <Text style={styles.cityListItem}>Navoiy v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Sirdaryo v')}>
                            <Text style={styles.cityListItem}>Sirdaryo v</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleCitySelection('Surxondaryo v')}>
                            <Text style={styles.cityListItem}>Surxondaryo v</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <View style={styles.hospitalFilter_citySelection}>
                <Text style={styles.hospitalFilter_citySelection_text}>Rayon</Text>
                <TouchableOpacity style={styles.hospitalFilter_citySelection_button} onPress={toggleDistrictList}>
                    <Text style={styles.hospitalFilter_citySelection_button_text}>{selectedDistrict || 'Tanlang'}</Text>
                </TouchableOpacity>
                {showDistrictList && (
                    <View style={styles.cityList}>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Shayxontohur tumani')}>
                            <Text style={styles.cityListItem}>Shayxontohur tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Mirzo Ulugʻbek tumani')}>
                            <Text style={styles.cityListItem}>Mirzo Ulugʻbek tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Bektemir tumani')}>
                            <Text style={styles.cityListItem}>Bektemir tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Mirobod tumani')}>
                            <Text style={styles.cityListItem}>Mirobod tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Sergeli tumani')}>
                            <Text style={styles.cityListItem}>Sergeli tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Olmazor tumani')}>
                            <Text style={styles.cityListItem}>Olmazor tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Chilonzor tumani')}>
                            <Text style={styles.cityListItem}>Chilonzor tumani</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cityListItem} onPress={() => handleDistrictSelection('Yunusobod tumani')}>
                            <Text style={styles.cityListItem}>Yunusobod tumani</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <TouchableOpacity onPress={keepGoingFilter} style={styles.hospitalFilter_button}>
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
        width: "90%",
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
        height: "auto",
        marginTop: 15,
        marginBottom: 15,
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
    cityList: {
        backgroundColor: "#190482",
        alignItems: "center",
        borderRadius: 10,
        zIndex: 5
    },
    cityListItem: {
        fontSize: 20,
        color: "white",
        margin: 2
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
