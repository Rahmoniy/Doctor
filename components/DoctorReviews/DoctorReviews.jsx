import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const DoctorReviews = () => {
    const [showMore, setShowMore] = useState(false);

    const reviewText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna risus, pulvinar vel pulvinar vel, euismod ut lacus. Donec eu libero sit amet quam egestas semper. Aenean imperdiet dolor magna, vitae suscipit odio pulvinar vitae.`;

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const shortReview = `${reviewText.substring(0, 100)}...`;
    const longReview = reviewText;

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.doctorReviews}>
                <Text style={styles.doctorReviews_thePatient}>Muhammad Bemor</Text>
                <View style={styles.doctorReviews_stars}>
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/failedStar.png')}
                        style={{ width: 22, height: 20 }}
                    />
                    <Text style={styles.doctorReviews_stars_text}>20 iyul</Text>
                </View>
                <Text style={styles.doctorReviews_reviewText}>
                    {showMore ? longReview : shortReview}
                </Text>
                {reviewText.length > 100 && (
                    <TouchableOpacity onPress={handleShowMore}>
                        <Text style={styles.doctorReviews_showMoreText}>
                            {showMore ? 'kamroq ko`rish' : 'Ko`proq ko`rish'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.doctorReviews}>
                <Text style={styles.doctorReviews_thePatient}>Muhammad Bemor</Text>
                <View style={styles.doctorReviews_stars}>
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/failedStar.png')}
                        style={{ width: 22, height: 20 }}
                    />
                    <Text style={styles.doctorReviews_stars_text}>20 iyul</Text>
                </View>
                <Text style={styles.doctorReviews_reviewText}>
                    {showMore ? longReview : shortReview}
                </Text>
                {reviewText.length > 100 && (
                    <TouchableOpacity onPress={handleShowMore}>
                        <Text style={styles.doctorReviews_showMoreText}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.doctorReviews}>
                <Text style={styles.doctorReviews_thePatient}>Muhammad Bemor</Text>
                <View style={styles.doctorReviews_stars}>
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/fullStar.png')}
                        style={{ width: 20, height: 20 }}
                    />
                    <Image
                        source={require('../../assets/failedStar.png')}
                        style={{ width: 22, height: 20 }}
                    />
                    <Text style={styles.doctorReviews_stars_text}>20 iyul</Text>
                </View>
                <Text style={styles.doctorReviews_reviewText}>
                    {showMore ? longReview : shortReview}
                </Text>
                {reviewText.length > 100 && (
                    <TouchableOpacity onPress={handleShowMore}>
                        <Text style={styles.doctorReviews_showMoreText}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
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
