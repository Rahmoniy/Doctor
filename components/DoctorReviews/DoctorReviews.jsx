import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DoctorReviews = () => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(-1);
    const [showMore, setShowMore] = useState(false);

    const reviews = [
        {
            patient: "Muhammad",
            stars: 4,
            date: "5 may",
            text: "Sizning ilmingiz va ko'ngil dunyongizni noyob bir xizmatga aylantirishingiz hech qachon yomon yo'q! Sog'lik sohasidagi ko'ngil-ruhiy qabiliyatlaringiz va sabrli mehnat doirasida, sizning xizmatingiz hayotlarga yordam beradi."
        },
        {
            patient: "Bekstuch",
            stars: 5,
            date: "10 aprel",
            text: "Mukofotli hamda ishingiz shifokorlar jamoasi uchun noyob hissa hisoblanadi. Sizning sabrlaringiz, o'z bilim va tajribangiz bilan har bir chorakda, har bir kasbda, sog'lik sohasida yangi yorqinliklar yaratishingizga omad tilayman"
        },
        {
            patient: "doston",
            stars: 3,
            date: "21 aprel",
            text: "Shifokorlar sizning mukofotli ishingiz shifokorlar jamoasi uchun noyob hissa hisoblanadi. Sizning sabrlaringiz, o'z bilim va tajribangiz bilan har bir chorakda, har bir kasbda, sog'lik sohasida yangi yorqinliklar yaratishingizga omad tilayman"
        },
        {
            patient: "doston",
            stars: 4,
            date: "18 aprel",
            text: "Sizning ilmingiz va ko'ngil dunyongizni noyob bir xizmatga aylantirishingiz hech qachon yomon yo'q! Sog'lik sohasidagi ko'ngil-ruhiy qabiliyatlaringiz va sabrli mehnat doirasida, sizning xizmatingiz hayotlarga yordam beradi."
        }
    ];

    const handleShowMore = (index) => {
        setSelectedReviewIndex(index === selectedReviewIndex ? -1 : index);
    };
    return (
      <View style={{ flexDirection: 'row' }}>
          {reviews.map((review, index) => (
            <View style={styles.doctorReviews} key={index}>
                <Text style={styles.doctorReviews_thePatient}>{review.patient}</Text>
                <View style={styles.doctorReviews_stars}>
                    {[...Array(review.stars)].map((_, i) => (
                      <Image
                        key={i}
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                      />
                    ))}
                    <Image
                      source={require('../../assets/failedStar.png')}
                      style={{ width: 22, height: 20 }}
                    />
                    <Text style={styles.doctorReviews_stars_text}>{review.date}</Text>
                </View>
                <Text style={styles.doctorReviews_reviewText}>
                    {review.text}
                </Text>
                {/*{review.text.length > 100 && (*/}
                {/*  <TouchableOpacity onPress={() => handleShowMore(index)}>*/}
                {/*      <Text style={styles.doctorReviews_showMoreText}>*/}
                {/*          {showMore && selectedReviewIndex === index ? 'Ko`proq ko`rish' : 'Kamroq ko`rish'}*/}
                {/*      </Text>*/}
                {/*  </TouchableOpacity>*/}
                {/*)}*/}
            </View>
          ))}
      </View>
    );
};
const styles = StyleSheet.create({
    doctorReviews: {
        width: 320,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 10,
        borderColor: "#DDDDDD",
        borderWidth: 1,
    },
    doctorReviews_thePatient: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    doctorReviews_stars: {
        flexDirection: 'row',
        alignItems: "center",
    },
    doctorReviews_stars_text: {
        fontSize: 12,
        color: 'rgba(138, 150, 188, 1)',
        marginLeft: 5,
    },
    doctorReviews_reviewText: {
        fontSize: 13,
        fontVariant: "Poppins",
        lineHeight: 20,
        color: "red"
    },
    doctorReviews_showMoreText: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
});

export default DoctorReviews;


