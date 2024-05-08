import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import DoctorReviews from '../DoctorReviews/DoctorReviews';
import HospitalTotalApi from '../../Api/HospitalTotal'

const HospitalInformation = (props) => {
    const [showMore, setShowMore] = useState(false);
    const [data, setData] = useState();
    const { route } = props;
    const { id } = route.params;

    useEffect(() => {
        HospitalTotalApi.getHospitalById(id)
            .then(res => {
                setData(res)
            })

    }, []);

    const shortReview = `${data && data.info.substring(0, 100)}...`;
    const longReview = data && data.info;

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Toliq Malumot</Text>
                <View style={styles.card}>
                    <View style={styles.cardImg}>
                        <Image style={{ width: 280, height: 180 }} source={data ? { uri: data.img } : require("../../assets/hospital.png")} />
                    </View>
                    <Text style={styles.cardImgText}>{data && data.name}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>{data && data.category} haqida</Text>
                    <Text style={styles.infoTextInfo}> {showMore ? longReview : shortReview}</Text>
                    <TouchableOpacity onPress={handleShowMore}>
                        <Text style={{ color: "black" }}>
                            {showMore ? 'kamroq ko`rish' : 'Ko`proq ko`rish'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.infoText}>Manzil</Text>
                    <Text style={styles.infoTextInfo}>{data && data.maplockation}</Text>
                    <Text style={styles.infoText}>{data && data.category} telefon raqami</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:${data && data.callnumber}`)}>
                        <Text style={styles.infoTextInfo}>{data && data.callnumber}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.comment}>
                    <View style={styles.commentHeaderTexts}>
                        <Text style={styles.commentHeaderTextsText}>3 ta sharh</Text>
                        <Text style={styles.commentHeaderTextsTextAll}>barcha</Text>
                    </View>
                </View>
                <ScrollView style={{ width: "100%", flexDirection: 'row' }} horizontal={true}>
                    <DoctorReviews />
                </ScrollView>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 27,
        paddingBottom: 30,
        alignItems: 'center',
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'black'
    },
    card: {
        width: 150,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cardImg: {
        width: 190,
        height: 180,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: "wrap"
    },
    cardImgText: {
        width: 250,
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#263257',
        marginTop: 10,
        textAlign: "center",
    },
    cardImgCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardImgCategoryText: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(125, 139, 183, 1)',
    },
    info: {
        width: '100%',
        marginTop: 20,
        // alignItems: 'left',
    },
    infoText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'rgba(38, 50, 87, 1)'
    },
    infoTextInfo: {
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)',
        marginTop: 10
    },
    map: {
        flex: 1,
        width: '100%',
    },
    comment: {
        width: '100%',
        marginTop: 20,
    },
    commentHeaderTexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    commentHeaderTextsText: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'rgba(38, 50, 87, 1)'
    },
    commentHeaderTextsTextAll: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)',
    },
});

export default HospitalInformation;
