import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const salara_1Reviews = (props) => {
    const [selectedReviewIndex, setSelectedReviewIndex] = useState(-1);
    const [showMore, setShowMore] = useState(false);
    const reviews = props.state.dataReviews;

    const handleShowMore = (index) => {
        setSelectedReviewIndex(index === selectedReviewIndex ? -1 : index);
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            {reviews.map((review, index) => (
                <View style={styles.salara_1Reviews} key={index}>
                    <Text style={styles.salara_1Reviews_thePatient}>{review.patient}</Text>
                    <View style={styles.salara_1Reviews_stars}>
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
                        <Text style={styles.salara_1Reviews_stars_text}>{review.date}</Text>
                    </View>
                    <Text style={styles.salara_1Reviews_reviewText}>
                        {review.text}
                    </Text>
                    {review.text.length > 100 && (
                        <TouchableOpacity onPress={() => handleShowMore(index)}>
                            <Text style={styles.salara_1Reviews_showMoreText}>
                                {showMore && selectedReviewIndex === index ? 'Ko`proq ko`rish' : 'Kamroq ko`rish'}
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    salara_1Reviews: {
        width: 320,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: 10,
        borderColor: "#DDDDDD",
        borderWidth: 1,
    },
    salara_1Reviews_thePatient: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    salara_1Reviews_stars: {
        flexDirection: 'row',
        alignItems: "center",
    },
    salara_1Reviews_stars_text: {
        fontSize: 12,
        color: 'rgba(138, 150, 188, 1)',
        marginLeft: 5,
    },
    salara_1Reviews_reviewText: {
        fontSize: 13,
        fontVariant: "Poppins",
        lineHeight: 20,
        color: "red"
    },
    salara_1Reviews_showMoreText: {
        marginTop: 10,
        fontSize: 14,
        color: '#333',
    },
});

export default salara_1Reviews;
