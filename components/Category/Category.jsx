import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import CardDoctor from '../CardDoctor/CardDoctor';
import CardDoctorApi from '../../Api/CardDoctor';

const Category = () => {
    const dataCard = [
        {
            id: 1,
            img: 'https://png.pngtree.com/png-clipart/20201224/ourmid/pngtree-original-doctor-icon-vector-material-png-image_2607465.jpg',
            title: 'Hammasi'
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOHwcc3_NlxgAE4tH7iow7E7Z-M8kXbGgxkPLbf6Ebw-vtlNwursMSsKiWf3Ny-GkW4A&usqp=CAU',
            title: 'Nefrolog'
        },
        {
            id: 3,
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0d1aLmGyDgHwbgCSmBA9IUGM0yGeusEZjWgjkcNa0FHBgYnTy',
            title: 'Pulmonolog'
        },
        {
            id: 4,
            img: 'https://cdn-icons-png.flaticon.com/512/6235/6235256.png',
            title: 'Endokrinolog'
        },
        {
            id: 5,
            img: 'https://cdn-icons-png.flaticon.com/512/847/847154.png',
            title: 'Dermatolog'
        },
        {
            id: 6,
            img: 'https://cdn-icons-png.flaticon.com/512/7031/7031620.png',
            title: 'Jarrohlik'
        },
        {
            id: 7,
            img: 'https://w7.pngwing.com/pngs/639/578/png-transparent-pediatrics-physician-child-medicine-pediatric-nursing-child-pediatrics-physician-child-thumbnail.png',
            title: 'Pediatrlar'
        },
    ]
    const [searchText, setSearchText] = useState('');
    const [showClearIcon, setShowClearIcon] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [booleanBg, setbooleanBg] = useState('')

    useEffect(() => {
        CardDoctorApi.getCardDoctor()
            .then((res) => {
                setData(res);
                setFilteredData(res); // Initial filtered data is set to all data
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    const handleClearText = () => {
        setSearchText('');
        setShowClearIcon(false); // Hide clear icon after clearing text
    };

    const FilterCategory = (params) => {
        setbooleanBg(params)
        if (params === "Hammasi") {
            setFilteredData(data);
        } else {
            let filterData = data.filter(res => res.yolanish === params);
            setFilteredData(filterData);
        }
    }

    const handleSearchChange = (text) => {
        setSearchText(text);
        setShowClearIcon(text.length > 0);
        const searchRegex = new RegExp(text.trim(), 'gi'); // Case-insensitive search with 'gi' flag
        const filteredData = data.filter(item => searchRegex.test(item.name)); // Search by name property (assuming data has a 'name' property)
        setFilteredData(filteredData);
    };

    const resetFilter = () => {
        setSearchText('');
        setShowClearIcon(false);
        setFilteredData(data);
    };


    return (
        <View style={styles.TopDoctors}>
            <Text style={styles.HeaderText}>Kategoriyalar</Text>
            <View style={styles.container}>
                <View style={styles.header_textvsinput_search}>
                    <Image source={require('../../assets/search_icon.png')} style={styles.header_textvsinput_search_searchIcon} />
                    <TextInput
                        style={styles.header_textvsinput_search_searchInput}
                        placeholder="Search..."
                        placeholderTextColor="black"
                        onChangeText={(val) => { handleSearchChange(val) }}
                        value={searchText}
                    />
                    {showClearIcon && ( // Conditionally render clear icon
                        <TouchableOpacity onPress={resetFilter}>
                            <Image
                                source={require('../../assets/clear_icon.png')} // Replace with your clear icon image
                                style={styles.header_textvsinput_search_clearIcon}
                                onPress={resetFilter}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            <View style={styles.header_category}>
                <ScrollView contentContainerStyle={styles.scrollViewContent} horizontal={true}>
                    {
                        dataCard.map(res => {
                            return (
                                <TouchableOpacity onPress={() => { FilterCategory(res.title) }} key={res.id} style={{ width: 90, height: 90, marginRight: 15, alignItems: "center" }}>
                                    <View style={{ ...styles.header_category_card, backgroundColor: res.title == booleanBg ? "#B1A1D1" : "white" }}>
                                        <Image style={styles.header_category_card_img} source={{ uri: res.img }} />
                                    </View>
                                    <Text style={{ marginTop: 5, color: '#7D8BB7', textAlign: "center" }}>{res.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={{ height: "53%" }}>
                <ScrollView >
                    {
                        filteredData.length > 0 ?
                            <>
                                {filteredData.map((item) => (
                                    <View key={item.id}>
                                        <CardDoctor state={{ item: item }} />
                                    </View>
                                ))}
                            </>
                            :
                            <View><Text style={{ textAlign: "center", fontSize: 22, color: "blue" }}>Malumot yoq</Text></View>
                    }
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
    header_category: {
        width: "100%",
        height: 130,
        marginTop: 20,
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,

    },
    header_category_card: {
        width: 72,
        height: 72,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#b3b3b3',
    },
    header_category_card_img: {
        width: 40,
        height: 40
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
    },
    scrollViewContent: {
        height: 160,
        paddingHorizontal: 10,
    }
});

export default Category;
