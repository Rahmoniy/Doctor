import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TextInput } from 'react-native';
import CardDoctor from '../CardDoctor/CardDoctor';
import CardDoctorApi from '../../Api/CardDoctor';


const TopDoctors = () => {
    const [searchText, setSearchText] = useState('');
    const [showClearIcon, setShowClearIcon] = useState(false);
    const [data, setData] = useState([]);


    const handleSearchChange = (text) => {
        setSearchText(text);
        setShowClearIcon(text.length > 0); // Show clear icon if text length is greater than 0
    };

    const handleClearText = () => {
        setSearchText('');
        setShowClearIcon(false); // Hide clear icon after clearing text
    };

    useEffect(() => {

        CardDoctorApi.getCardDoctor()
            .then((res) => {
                const filteredData = res.filter(item => item.level >= 4.8);
                setData(filteredData);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <View style={styles.TopDoctors}>
            <Text style={styles.HeaderText}>Top Doctorlar</Text>
            <View style={styles.container}>
                <View style={styles.header_textvsinput_search}>
                    <Image source={require('../../assets/search_icon.png')} style={styles.header_textvsinput_search_searchIcon} />
                    <TextInput
                        style={styles.header_textvsinput_search_searchInput}
                        placeholder="Search..."
                        placeholderTextColor="black"
                        onChangeText={handleSearchChange}
                        value={searchText}
                    />
                    {showClearIcon && ( // Conditionally render clear icon
                        <TouchableOpacity onPress={handleClearText}>
                            <Image
                                source={require('../../assets/clear_icon.png')} // Replace with your clear icon image
                                style={styles.header_textvsinput_search_clearIcon}
                                onPress={handleClearText}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={{ height: "73%" }}>
                <ScrollView>
                    {data && data.map((item) => (
                        <View key={item.id}>
                            <CardDoctor state={{ item: item }} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    TopDoctors: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    HeaderText: {
        fontSize: 30,
        fontFamily: "Poppins",
        marginTop: 15,
        color: '#232F55'
    },
    header_textvsinput_search: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginTop: 10
    },
    header_textvsinput_search_searchIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    header_textvsinput_search_searchInput: {
        flex: 1,
        fontSize: 16,
        color: 'black'
    },
    header_textvsinput_search_clearIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    }
});

export default TopDoctors;
