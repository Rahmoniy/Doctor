// DrInformation
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import DoctorReviews from '../DoctorReviews/DoctorReviews';
import { useNavigation } from '@react-navigation/native';
import CardDoctorApi from '../../Api/CardDoctor';
import { useSelector } from 'react-redux';
import Auth from '../../Api/Auth';




const DrInformation = (props) => {
    const { route } = props;
    const { id } = route.params;
    const navigation = useNavigation();
    const selector = useSelector(state => state.id)
    const [boolean, setBoolean] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [table, setTable] = useState(null);
    const [visitHour, setVisitHour] = useState(null);
    const [data, setData] = useState();
    const [DoctorWeek, setDoctorWeek] = useState({})
    const [dataWeekChange, setDataWeekChange] = useState()
    const [dataTime, setDataTime] = useState([])
    const dataReviews = [
        {
            patient: "Soti buvi",
            stars: 5,
            date: "10 aprel",
            text: `Bu doctor menga juda yordam berdi rahmat aytaman chunki bunday doctorni avval ko'rmagan edim shuning cuchun hursadman mayli ishilaga omad diyman hulas`
        },
    ]

    useEffect(() => {
        CardDoctorApi.getDoctorInfo(id)
            .then(res => {
                setData(res);
                setDataWeekChange(res)
            })
        Auth.UserInfoId(selector)
            .then((response) => {
                setDoctorWeek(response);
            }).catch(err => console.log(err))

    }, [])
    const Dot = ({ focused }) => (
        <View
            style={{
                position: "absolute",
                width: 18, // Nuqta o'lchami
                height: 18, // Nuqta balandligi
                top: 5,
                right: 2,
                borderRadius: 10, // Nuqta radiusi (eng/bo'yi)
                backgroundColor: focused ? "#8EF4BC" : "#ccc", // Nuqta rangi, focused bo'lsa "#8EF4BC" rangni ko'rsat, aks holda "#ccc" rangni ko'rsat
            }}
        />
    );

    const handleStarPress = (index) => {
        setSelectedDay(index);
        const tableData = { bolleanWeek: true, id: index.id, number_dey: index.number_dey, number_week: index.number_week };
        setTable(tableData);
        setDataTime(index.Tashrif);

    };

    const handleHourPress = (hour) => {
        setSelectedHour(hour);
        const visitHourData = { booleanVisitingHours: true, id: hour.id, number_hour: hour.number_hour };
        setVisitHour(visitHourData);
        console.log(hour);
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleSave = () => {
        const dataMeeting = {
            img: data.img,
            name: data.name,
            yolanish: data.yolanish,
            table: table,
            visitHour: visitHour
        }
        console.log(dataMeeting);
        if (table != null && visitHour != null) {
            DoctorWeek?.data?.push(dataMeeting)
            console.log("====>>>", DoctorWeek);
            Auth.UserInfoPut(selector, DoctorWeek)
            workingApi()
        } else {
            Alert.alert('Error', 'Vohtni bergilang')
        }

    }

    function workingApi() {
        // Jadvallar array'inde belirli bir id'ye sahip öğeyi güncelle
        const updatedJadvallar = dataWeekChange.Jadvallar.map(outerRes => {
            if (outerRes.id === table.id) {
                // Tashrif dizisindeki tüm öğelerin booleanVisitingHours değerlerini kontrol et
                const allVisitingHoursTrue = outerRes.Tashrif.every(innerRes => innerRes.booleanVisitingHours);

                // Eğer Tashrif dizisindeki tüm öğelerin booleanVisitingHours değeri true ise
                if (allVisitingHoursTrue) {
                    // bolleanWeek değerini true yap
                    return { ...outerRes, bolleanWeek: true };
                } else {
                    // Tashrif dizisindeki belirli bir öğenin booleanVisitingHours değerini true yap
                    const updatedTashrif = outerRes.Tashrif.map(innerRes => {
                        if (innerRes.id == selectedHour.id) {
                            return { ...innerRes, booleanVisitingHours: true };
                        }
                        return innerRes;
                    });
                    // Güncellenmiş Tashrif dizisiyle birlikte öğeyi geri döndür
                    return { ...outerRes, Tashrif: updatedTashrif };
                }
            }
            // Diğer durumlarda öğeyi değiştirmeden geri döndür
            return outerRes;
        });

        // Yeni veriyi ayarla
        const newDataWeekChange = { ...dataWeekChange, Jadvallar: updatedJadvallar };
        setDataWeekChange(newDataWeekChange);

        // Veriyi API'ye gönder ve ardından ana ekrana yönlendir
        CardDoctorApi.pushDoctorInfo(id, newDataWeekChange)
            .then(res => {
                navigation.navigate('Main');
            });
    }





    const shortReview = `${data && data.drinfo.substring(0, 100)}...`;
    const longReview = data && data.drinfo;

    return (
        <ScrollView>
            <View style={styles.drInformation}>
                <Text style={styles.drInformation_title}>Uchrashuv</Text>
                <View style={styles.drInformation_cardimg}>
                    <View style={styles.drInformation_cardimg_imguser}>
                        <Image style={{ width: 90, height: 110, borderRadius: 30 }} source={data ? { uri: data.img } : require("../../assets/Drimg.png")} />
                        <Dot focused={boolean} />
                    </View>
                    <Text style={styles.drInformation_cardimg_textuser}>{data ? data.name : 'Doctor Ism'}</Text>
                    <View style={styles.drInformation_cardimg_category}>
                        {/* <Image style={{ width: 15, height: 15 }} source={require('../../assets/Cardiology.png')} /> */}
                        <Text style={styles.drInformation_cardimg_category_text}> {data ? data.yolanish : 'yolanish'}</Text>
                    </View>
                </View>
                <View style={styles.constainer}>
                    <View style={styles.drInformation_cardExperienceInfo}>
                        <View style={styles.drInformation_cardExperienceInfo_patients}>
                            <Text style={styles.drInformation_cardExperienceInfo_patients_testNumber}>{data && data.Bemorlar}+</Text>
                            <Text style={styles.drInformation_cardExperienceInfo_patients_test}>Bemorlar</Text>
                        </View>
                        <View style={styles.drInformation_cardExperienceInfo_patients}>
                            <Text style={{ ...styles.drInformation_cardExperienceInfo_patients_testNumber, color: 'rgba(95, 189, 255, 1)' }}>{data && data.Tajribam}+</Text>
                            <Text style={styles.drInformation_cardExperienceInfo_patients_test}>Tajribam</Text>
                        </View>
                        <View style={styles.drInformation_cardExperienceInfo_patients}>
                            <Text style={{ ...styles.drInformation_cardExperienceInfo_patients_testNumber, color: "rgba(255, 154, 154, 1)" }}>{data && data.Baholashlar}+</Text>
                            <Text style={styles.drInformation_cardExperienceInfo_patients_test}>Baholashlar</Text>
                        </View>
                    </View>
                    <View style={styles.drInformation_Info}>
                        <Text style={styles.drInformation_Info_text}>Doktor haqida</Text>
                        <Text style={styles.drInformation_Info_textInfo}> {showMore ? longReview : shortReview}</Text>
                        <TouchableOpacity onPress={handleShowMore}>
                            <Text style={{ color: "black" }}>
                                {showMore ? 'kamroq ko`rish' : 'Ko`proq ko`rish'}
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ ...styles.drInformation_Info_text, marginTop: 10 }}>Manzil</Text>
                        <Text style={styles.drInformation_Info_textInfo}>{data && data.Address}</Text>
                        <Text style={{ ...styles.drInformation_Info_text, marginTop: 10 }}>Doktorning telefon raqami</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:${data && data.Number}`)}>
                            <Text style={{ ...styles.drInformation_Info_textInfo, color: "blue", textDecorationLine: "underline" }}>{data && data.Number}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drInformation_comment}>
                    <View style={styles.constainer}>
                        <View style={styles.drInformation_comment_headertexts}>
                            <Text style={styles.drInformation_comment_headertexts_text}>1 ta sharh</Text>
                            <Text style={styles.drInformation_comment_headertexts_textAll}>barcha</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView style={{ width: "100%", flexDirection: 'row' }} horizontal={true}>
                            <DoctorReviews state={{ dataReviews: dataReviews }} />
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.drInformation_giveDay}>
                    <View style={styles.constainer}>
                        <View style={styles.drInformation_giveDay_headertexts}>
                            <Text style={styles.drInformation_giveDay_headertexts_text}>Jadvallar</Text>
                            <Text style={styles.drInformation_giveDay_headertexts_textAll}>may</Text>
                        </View>
                        <ScrollView style={{ width: "100%", flexDirection: 'row', marginTop: 10 }} horizontal={true}>
                            {data && data.Jadvallar.map((item, i) => (
                                item.bolleanWeek ?
                                    <TouchableOpacity key={i} >
                                        <View style={[styles.drInformation_giveDay_Day, { borderColor: "#F7F8F8" }]}>
                                            <Text style={[styles.drInformation_giveDay_Day_text, { color: '#8A96BC' }]}>{item.number_dey}</Text>
                                            <Text style={[styles.drInformation_giveDay_Day_week, { color: '#8A96BC' }]}>{item.number_week}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity key={i} onPress={() => handleStarPress(item)}>
                                        <View style={[styles.drInformation_giveDay_Day, selectedDay === item ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }]}>
                                            <Text style={[styles.drInformation_giveDay_Day_text, selectedDay === item ? { color: 'white' } : { color: 'black' }]}>{item.number_dey}</Text>
                                            <Text style={[styles.drInformation_giveDay_Day_week, selectedDay === item ? { color: 'white' } : { color: 'black' }]}>{item.number_week}</Text>
                                        </View>
                                    </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.VisitingHours}>
                    <View style={styles.constainer}>
                        <Text style={styles.VisitingHours_headertext}>Tashrif soati</Text>
                        <View style={styles.VisitingHours_hours}>
                            {dataTime.length > 0 ?
                                <>
                                    {dataTime.map((item, hour) => ( // Burada dataTime'ı map ediyorum
                                        item.booleanVisitingHours ?
                                            <TouchableOpacity key={hour}>
                                                <View style={[styles.VisitingHours_hours_time, { borderColor: "#F7F8F8" }]}>
                                                    <Text style={[styles.VisitingHours_hours_time_text, { color: '#8A96BC' }]}>{item.number_hour}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            :
                                            <TouchableOpacity key={hour} onPress={() => handleHourPress(item)}>
                                                <View style={[styles.VisitingHours_hours_time, selectedHour === item ? { backgroundColor: 'blue' } : { backgroundColor: 'white' }]}>
                                                    <Text style={[styles.VisitingHours_hours_time_text, selectedHour === item ? { color: 'white' } : { color: 'black' }]}>{item.number_hour}</Text>
                                                </View>
                                            </TouchableOpacity>
                                    ))}
                                </>
                                :
                                <><Text style={{ color: "black", fontSize: 20 }}>kunni tanlang</Text></>
                            }
                        </View>
                    </View>

                </View>
                <TouchableOpacity onPress={handleSave} style={styles.drInformation_button}>
                    <Text style={styles.drInformation_button_text}>Saqlash</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    drInformation: {
        flex: 1,
        paddingTop: 27,
        alignItems: 'center',
        backgroundColor: "white",
    },
    constainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    drInformation_title: {
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'black'
    },
    drInformation_cardimg: {
        width: 150,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',

    },
    drInformation_cardimg_imguser: {
        width: 90,
        height: 105,
        borderRadius: 30,
        backgroundColor: "rgba(179, 147, 255, 1)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drInformation_cardimg_textuser: {
        width: "100%",
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: 'black',
        marginTop: 10,
        textAlign: "center"
    },
    drInformation_cardimg_category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    drInformation_cardimg_category_text: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(125, 139, 183, 1)',
    },
    drInformation_cardExperienceInfo: {
        width: '100%',
        marginTop: 20,
        backgroundColor: "rgba(178, 140, 255, 1)",
        padding: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    drInformation_cardExperienceInfo_patients: {
        width: 100,
        height: 86,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drInformation_cardExperienceInfo_patients_testNumber: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '800',
        color: 'rgba(178, 140, 255, 1)',
        textAlign: 'center',
    },
    drInformation_cardExperienceInfo_patients_test: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)'
    },
    drInformation_Info: {
        width: '100%',
        marginTop: 20,
        // alignItems: 'left',
    },
    drInformation_Info_text: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'rgba(38, 50, 87, 1)'
    },
    drInformation_Info_textInfo: {
        fontSize: 13,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)',
        marginTop: 10
    },
    drInformation_Info_Address: {

    },
    drInformation_comment: {
        width: '100%',
        marginTop: 20,
    },
    drInformation_comment_headertexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    drInformation_comment_headertexts_text: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'rgba(38, 50, 87, 1)'
    },
    drInformation_comment_headertexts_textAll: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)',
    },
    drInformation_giveDay: {
        width: '100%',
        marginTop: 20,
    },
    drInformation_giveDay_headertexts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    drInformation_giveDay_headertexts_text: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'rgba(38, 50, 87, 1)'
    },
    drInformation_giveDay_headertexts_textAll: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'rgba(138, 150, 188, 1)',
    },
    drInformation_giveDay_Day: {
        width: 62,
        height: 72,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#DDDDDD",
        marginRight: 30,
        borderRadius: 15,
        paddingBottom: 10
    },
    drInformation_giveDay_Day_text: {
        fontSize: 25,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'black',
        textAlign: 'center',
        marginTop: 10
    },
    drInformation_giveDay_Day_week: {
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#8A96BC',
        textAlign: 'center',
        marginTop: 10
    },
    VisitingHours: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'row'
    },
    VisitingHours_headertext: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        textAlign: 'left',
        color: 'rgba(38, 50, 87, 1)',
    },
    VisitingHours_hours: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    VisitingHours_hours_time: {
        width: 76,
        height: 40,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    VisitingHours_hours_time_text: {
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        lineHeight: 19.5
    },
    drInformation_button: {
        width: '100%',
        marginTop: 20,
        height: 50,
        backgroundColor: "#190482",
        borderWidth: 1,
        borderColor: "#DDDDDD",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    drInformation_button_text: {
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        lineHeight: 19.5
    }

})
export default DrInformation;
