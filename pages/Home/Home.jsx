import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import CardDoctor from '../../components/CardDoctor/CardDoctor';
import { useNavigation } from '@react-navigation/native';
import CardDoctorApi from '../../Api/CardDoctor';

const Home = () => {
    ; // State to track if scrolling up or down
    const [searchText, setSearchText] = useState('');
    const [showClearIcon, setShowClearIcon] = useState(false); // State for clear icon visibility
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);
    const [data, setData] = useState([]);


    useEffect(() => {
        CardDoctorApi.getCardDoctor()
            .then((res) => {
                const filteredData = res.filter(item => ["Pediatrlar", "Nefrolog", "Pulmonolog", "Endokrinolog"].includes(item.yolanish) && item.BooleanDoctor === true);
                // console.log(filteredData);
                setData(filteredData);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);





    const handleSearchChange = (text) => {
        setSearchText(text);
        setShowClearIcon(text.length > 0); // Show clear icon if text length is greater than 0
    };

    const handleClearText = () => {
        setSearchText('');
        setShowClearIcon(false); // Hide clear icon after clearing text
    };

    const handleScroll = (event) => {
        const offsetYx = event.nativeEvent.contentOffset.y;
        setScrollY(offsetYx);
    };


    const Login = () => {
        navigation.navigate('Login')
    }



    return (
        <View style={styles.HomeScreen}>
            <Animated.View style={[styles.header, {
                height: scrollY > 2 ? 120 : 310
            }]}>
                <View style={styles.container}>
                    <View style={{ ...styles.header_user, zIndex: 1 }}>
                        <Image
                            style={styles.header_user_logo}
                            source={{ uri: "https://cdn-icons-png.freepik.com/512/10620/10620193.png" }}
                        />
                        <TouchableOpacity onPress={Login}>
                            <Image
                                style={styles.header_user_image}
                                source={require('../../assets/profile_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.header_textvsinput, marginTop: scrollY > 0 ? -150 : 10 }}>
                        <View style={{ zIndex: -1 }}>
                            <Text style={styles.header_textvsinput_text}>Qaytib kelganingizdan xursandmiz</Text>
                            <Text style={styles.header_textvsinput_title}>Topamiz {"\n"}Sizning eng yaxshi Shifokoringiz!</Text>
                        </View>
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
                </View>
            </Animated.View>
            <View style={{ ...styles.body, height: scrollY > 2 ? '72%' : '49%' }}>
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    <View style={styles.container}>
                        <Text style={styles.body_text}>Kategoriyalar</Text>
                        <View style={styles.body_image}>
                            <View style={styles.body_image_card}>
                                <View style={styles.body_image_card_imgcard}>
                                    <Image source={{ uri: "https://w7.pngwing.com/pngs/639/578/png-transparent-pediatrics-physician-child-medicine-pediatric-nursing-child-pediatrics-physician-child-thumbnail.png" }} style={styles.body_image_card_imgcard_image} />
                                </View>
                                <Text style={styles.body_image_card_imgcard_text}>Pediatrlar</Text>
                            </View>
                            <View style={styles.body_image_card}>
                                <View style={styles.body_image_card_imgcard}>
                                    <Image source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0d1aLmGyDgHwbgCSmBA9IUGM0yGeusEZjWgjkcNa0FHBgYnTy" }} style={styles.body_image_card_imgcard_image} />
                                </View>
                                <Text style={styles.body_image_card_imgcard_text}>Pulmonolog</Text>
                            </View>
                            <View style={styles.body_image_card}>
                                <View style={styles.body_image_card_imgcard}>
                                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOHwcc3_NlxgAE4tH7iow7E7Z-M8kXbGgxkPLbf6Ebw-vtlNwursMSsKiWf3Ny-GkW4A&usqp=CAU" }} style={styles.body_image_card_imgcard_image} />
                                </View>
                                <Text style={styles.body_image_card_imgcard_text}>Nefrolog</Text>
                            </View>
                            <View style={styles.body_image_card}>
                                <View style={styles.body_image_card_imgcard}>
                                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/6235/6235256.png" }} style={styles.body_image_card_imgcard_image} />
                                </View>
                                <Text style={styles.body_image_card_imgcard_text}>Endokrinolog</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body_cardDoctor}>
                        {data && data.map((item) => (
                            <View key={item.id}>
                                <CardDoctor state={{ item: item }} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        width: '100%',
        height: 310,
        backgroundColor: 'rgba(146, 91, 254, 1)',
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    header_user: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(146, 91, 254, 1)',
        alignItems: 'center'
    },
    header_user_logo: {
        width: 50,
        height: 50
    },
    header_user_image: {
        width: 40,
        height: 40
    },
    header_textvsinput: {
        marginTop: 25,
    },
    header_textvsinput_text: {
        fontFamily: "Poppins",
        fontSize: 15,
        fontWeight: '500', // Son ko'rinishida
        lineHeight: 19,
        letterSpacing: 0.02,
        textAlign: "left",
        color: 'white'
    },
    header_textvsinput_title: {
        fontFamily: "Poppins",
        fontSize: 35,
        fontWeight: '600',
        lineHeight: 44.16,
        letterSpacing: -0.005,
        textAlign: "left",
        color: 'white'
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
    },
    body: {
        width: '100%',
    },
    body_text: {
        fontFamily: "Poppins",
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.02,
        textAlign: "left",
        color: '#232F55',
        margin: 10
    },
    body_image: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    body_image_card: {
        width: '25%',
        alignItems: 'center',
    },
    body_image_card_imgcard: {
        width: 75,
        height: 76.8,
        borderRadius: 20,
        // borderWidth: 2,
        // borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'rgba(247, 248, 248, 1)',
        backgroundColor: "white"
    },
    body_image_card_imgcard_text: {
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 19,
        letterSpacing: 0.02,
        textAlign: "left",
        color: '#7D8BB7'
    },
    body_image_card_imgcard_image: {
        width: 40,
        height: 40,
        resizeMode: 'contain', // Adjust resizeMode as needed
    },
});

export default Home;




