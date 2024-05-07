import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
// import { WebView } from 'react-native-webview';
import DoctorReviews from '../DoctorReviews/DoctorReviews';

const HospitalInformation = () => {
    const [showMore, setShowMore] = useState(false);

    const textIndoHospital = 'OILAVIY POLIKLINIKA №37 (CHILONZOR TUMANI) qaerda joylashgan? OILAVIY POLIKLINIKA №37(CHILONZOR TUMANI) shu manzilda joylashgan: O`zbekiston, 100013, TOSHKENT, CHILONZOR tumani, 1 - chi KATORTOL tor ko`chasi, 1..OILAVIY POLIKLINIKA №37(CHILONZOR TUMANI) qanday borish mumkin ? Marshrutni yaratish uchun siz bizning veb - saytimizdagi xaritadan foydalanishingiz mumkin.OILAVIY POLIKLINIKA №37(CHILONZOR TUMANI) telefon raqamlari ? OILAVIY POLIKLINIKA №37(CHILONZOR TUMANI) ga siz shu raqamlar orqali qo’ng’iroq qilishingiz mumkin'

    const shortReview = `${textIndoHospital.substring(0, 100)}...`;
    const longReview = textIndoHospital;

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Toliq Malumot</Text>
                <View style={styles.card}>
                    <View style={styles.cardImg}>
                        <Image style={{ width: 280, height: 180 }} source={require("../../assets/hospital.png")} />
                    </View>
                    <Text style={styles.cardImgText}>37-Oilaviy Polklinika</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Polklinika haqida</Text>
                    <Text style={styles.infoTextInfo}> {showMore ? longReview : shortReview}</Text>
                    <TouchableOpacity onPress={handleShowMore}>
                        <Text style={{ color: "black" }}>
                            {showMore ? 'kamroq ko`rish' : 'Ko`proq ko`rish'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.infoText}>Manzil</Text>
                    <Text style={styles.infoTextInfo}>37-sonli oilaviy poliklinika, Chilonzor tumani, Kattalar poliklinikasi, 1-p.</Text>
                    {/*<WebView*/}
                    {/*    source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.734895984081!2d66.96300297581553!3d38.99854637170264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4c9f84d1609be5%3A0x70b63ecc7179c676!2s37-%20OILAVIY%20POLIKLINIKA!5e0!3m2!1sru!2s!4v1715079327264!5m2!1sru!2s' }}*/}
                    {/*    style={styles.map}*/}
                    {/*/>*/}
                    <Text style={styles.infoText}>Doktorning telefon raqami</Text>
                    <TouchableOpacity onPress={() => Linking.openURL(`tel:+998 90 999 99 99`)}>
                        <Text style={styles.infoTextInfo}>+998 90 999 99 99</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.comment}>
                    <View style={styles.commentHeaderTexts}>
                        <Text style={styles.commentHeaderTextsText}>18+ ta sharh</Text>
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
