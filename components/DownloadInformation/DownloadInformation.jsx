import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform, Linking } from 'react-native';

const DownloadInformation = () => {
    const handleButtonClick1 = async () => {
        try {
            // Rasimni telefonga yuklash
            const imageUrl = 'https://www.sammu.uz/upload/d-file/files/6351247a90666-6351247a90667-6351247a90668-6351247a90669.pdf';

            // Platform ma'lumoti bilan rasimni telefonga yuklash yo'lini aniqlash
            const downloadUrl = Platform.select({
                ios: `sms:&body=${imageUrl}`, // iOS uchun SMS orqali yuklash
                android: imageUrl, // Android uchun odatiy URL orqali yuklash
            });

            // Rasimni yuklab olish funksiyasi
            const downloadImage = () => {
                Linking.openURL(downloadUrl);
            };

            // Rasimni yuklab olish
            downloadImage();
        } catch (error) {
            console.error('Xato:', error);
        }
    };
    const handleButtonClick2 = async () => {
        try {
            // Rasimni telefonga yuklash
            const imageUrl = 'https://ttaa.tma.uz/vestnik-pdf/2022/ttaa-2022-1.pdf';

            // Platform ma'lumoti bilan rasimni telefonga yuklash yo'lini aniqlash
            const downloadUrl = Platform.select({
                ios: `sms:&body=${imageUrl}`, // iOS uchun SMS orqali yuklash
                android: imageUrl, // Android uchun odatiy URL orqali yuklash
            });

            // Rasimni yuklab olish funksiyasi
            const downloadImage = () => {
                Linking.openURL(downloadUrl);
            };

            // Rasimni yuklab olish
            downloadImage();
        } catch (error) {
            console.error('Xato:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.HeaderText}>Malumot Yuklash</Text>
            <View style={styles.DownloadInformation}>
                <View style={styles.DownloadInformation_left}>
                    <View style={styles.DownloadInformation_left_imguser}>
                        <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={require("../../assets/Drimg.png")} />
                    </View>
                    <View style={styles.DownloadInformation_left_star}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/Star.png')} />
                        <Text style={styles.ratingText}>5</Text>
                    </View>
                </View>
                <View style={styles.DownloadInformation_right}>
                    <Text style={styles.DownloadInformation_right_DoctorName}>Muhayo Fathulayeva</Text>
                    <Text style={styles.DownloadInformation_right_DoctorInfo}>Cardelog</Text>
                    <TouchableOpacity style={styles.DownloadInformation_right_button} onPress={handleButtonClick1}>
                        <Image style={{ width: 25, height: 25 }} source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/free-download-get-send-arrow-take-30470.png" }} />
                        <Text style={styles.DownloadInformation_right_buttonText}> yuklab olish</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.DownloadInformation}>
                <View style={styles.DownloadInformation_left}>
                    <View style={styles.DownloadInformation_left_imguser}>
                        <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={{ uri: "https://uz.kliniki.uz/images/small/281.jpg" }} />
                    </View>
                    <View style={styles.DownloadInformation_left_star}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/Star.png')} />
                        <Text style={styles.ratingText}>4.8</Text>
                    </View>
                </View>
                <View style={styles.DownloadInformation_right}>
                    <Text style={styles.DownloadInformation_right_DoctorName}>Gulchehra Nazarova</Text>
                    <Text style={styles.DownloadInformation_right_DoctorInfo}>Nefraliogiya</Text>
                    <TouchableOpacity style={styles.DownloadInformation_right_button} onPress={handleButtonClick2}>
                        <Image style={{ width: 25, height: 25 }} source={{ uri: "https://cdn.iconscout.com/icon/free/png-256/free-download-get-send-arrow-take-30470.png" }} />
                        <Text style={styles.DownloadInformation_right_buttonText}> yuklab olish</Text>
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
    HeaderText: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "Poppins",
        marginTop: 15,
        color: '#232F55'
    },
    DownloadInformation: {
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
    DownloadInformation_left: {
        width: 70,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    DownloadInformation_left_imguser: {
        width: 65,
        height: 65,
        borderRadius: 30,
        backgroundColor: "rgba(179, 147, 255, 1)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    DownloadInformation_left_star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
    },
    ratingText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 15,
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    DownloadInformation_right: {
        width: 220,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
    },
    DownloadInformation_right_DoctorName: {
        width: 220,
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    DownloadInformation_right_DoctorInfo: {
        width: 220,
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.02,
        color: "rgba(125, 139, 183, 1)"
    },
    DownloadInformation_right_button: {
        marginLeft: 100,
        backgroundColor: '#F7F8F8',
        borderRadius: 10,
        height: 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    DownloadInformation_right_buttonText: {
        height: 40,
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 35,
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "#222E54"
    }
});

export default DownloadInformation;
