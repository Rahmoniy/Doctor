import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Auth from '../../Api/Auth';
import { useSelector } from 'react-redux';

const ALongTime = () => {
    const [dataMeeting, setdataMeeting] = useState([]);
    const selector = useSelector(state => state.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Auth.UserInfoId(selector);
                setdataMeeting(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selector]);

    return (
        <View style={styles.aLongTime}>
            <Text style={styles.aLongTime_text}>Uchrashuv Bergilangan vaqt</Text>
            <ScrollView>
                {
                    dataMeeting?.length > 0 ?
                        <>
                            {
                                dataMeeting?.map((item, index) => {
                                    return (
                                        <View key={index} style={styles.container}>
                                            <View style={styles.cardaLongTime}>
                                                <View style={styles.cardaLongTime_left}>
                                                    <View style={styles.cardaLongTime_left_imguser}>
                                                        <Image style={{ width: 65, height: 65, borderRadius: 50 }} source={{ uri: item.img }} />
                                                    </View>
                                                    <View style={styles.cardaLongTime_left_star}>
                                                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/Star.png')} />
                                                        <Text style={styles.ratingText}>4.8</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.cardaLongTime_right}>
                                                    <Text style={styles.cardaLongTime_right_aLongTimeName}>{item.name}</Text>
                                                    <Text style={styles.cardaLongTime_right_aLongTimeInfo}>{item.yolanish}</Text>
                                                </View>
                                                <View style={styles.aLongTime_day}>
                                                    <View style={[styles.aLongTime_day_giveDay_Day,]}>
                                                        <Text style={[styles.aLongTime_day_giveDay_Day_text,]}>{item.table.number_dey}</Text>
                                                        <Text style={[styles.aLongTime_day_giveDay_Day_week,]}>{item.table.number_week}</Text>
                                                    </View>
                                                    <View style={[styles.aLongTimeHours_hours_time]}>
                                                        <Text style={[styles.aLongTimeHours_hours_time_text,]}>{item.visitHour.number_hour}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </>
                        :
                        <View style={{ marginTop: "50%" }}><Text style={{ color: "blue", fontSize: 25, textAlign: "center" }}>Hali Uchrashuv Tashkil qilinmadi</Text></View>
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    aLongTime: {
        height: '87%',
        // flex: 1,
        // alignItems: 'center',
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    aLongTime_text: {
        fontSize: 22,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'black',
        marginTop: 15,
        textAlign: "center"
    },
    cardaLongTime: {
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
    cardaLongTime_left: {
        width: 70,
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    cardaLongTime_left_imguser: {
        width: 65,
        height: 65,
        borderRadius: 30,
        backgroundColor: "rgba(179, 147, 255, 1)",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardaLongTime_left_star: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 13,
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
    cardaLongTime_right: {
        width: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 15,
    },
    cardaLongTime_right_aLongTimeName: {
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 0.02,
        textAlign: 'left',
        color: "rgba(8, 12, 47, 0.65)"
    },
    cardaLongTime_right_aLongTimeInfo: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.02,
        color: "rgba(125, 139, 183, 1)"
    },
    cardaLongTime_right_button: {
        backgroundColor: '#F7F8F8',
        borderRadius: 10,
        height: 30,
        paddingHorizontal: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    aLongTime_day: {
        width: '25%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aLongTime_day_giveDay_Day: {
        width: 65,
        height: 52,
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 15,
    },
    aLongTime_day_giveDay_Day_text: {
        fontSize: 24,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: 'blue',
        textAlign: 'center',
    },
    aLongTime_day_giveDay_Day_week: {
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'blue',
        textAlign: 'center',
    },
    aLongTimeHours_hours_time: {
        width: 76,
        height: 40,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    aLongTimeHours_hours_time_text: {
        fontSize: 15,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: 'blue',
        textAlign: 'center',
        lineHeight: 19.5
    },
});

export default ALongTime;
