import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getMainNavbarVsHeaderBackgroundColor, getMainNavBarTitleColor } from '../../Redux/functions/functions';

import Home from '../Home/Home';
import ALongTime from '../../components/ALongTime/ALongTime';
import TopDoctors from '../../components/TopDoctors/TopDoctors';
import HospitalTotal from '../../components/HospitalTotal/HospitalTotal';
import Category from '../../components/Category/Category';
import DownloadInformation from '../../components/DownloadInformation/DownloadInformation'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
);

const ALongTimeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ALongTimeScreen" component={ALongTime} />
    </Stack.Navigator>
);

const TopDoctorsStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TopDoctorsScreen" component={TopDoctors} />
    </Stack.Navigator>
);

const HospitalTotalStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HospitalTotalsScreen" component={HospitalTotal} />
    </Stack.Navigator>
);

const CategoryStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CategoryScreen" component={Category} />
    </Stack.Navigator>
);
const DownloadInformationStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DownloadInformationScreen" component={DownloadInformation} />
    </Stack.Navigator>
);

const MainTabNavigator = () => {
    const Dot = ({ color, focused }) => (
        focused ? (
            <View
                style={{
                    width: 5, // Nuqta o'lchami
                    height: 5, // Nuqta balandligi
                    top: 10,
                    borderRadius: 4, // Nuqta radiusi (eng/bo'yi)
                    backgroundColor: "#925BFE", // Nuqta rangi
                }}
            />
        ) : null
    );

    return (
        <View style={{ flex: 1, position: 'relative', backgroundColor: "red" }}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#190482',
                    tabBarInactiveTintColor: "#5FBDFF",
                    tabBarLabelStyle: { display: "none" },
                    tabBarStyle: {
                        borderRadius: 50,
                        position: 'absolute',
                        bottom: 10,
                        left: 20.5,
                        right: 20.5,
                        height: 85,
                        borderRadius: 23,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 44,
                        paddingBottom: 10,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/home_icon.png')}
                                    style={{ width: 35, height: 35, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="ALongTime"
                    component={ALongTimeStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/ALongTime.png')}
                                    style={{ width: 35, height: 35, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Categoriya"
                    component={CategoryStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/category.png')}
                                    style={{ width: 45, height: 45, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="TopDoctors"
                    component={TopDoctorsStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/TopDoctors.png')}
                                    style={{ width: 35, height: 35, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="HospitalTotal"
                    component={HospitalTotalStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/totalImg.png')}
                                    style={{ width: 35, height: 35, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="DownloadInformation"
                    component={DownloadInformationStack}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View style={{ flexWrap: "wrap", alignItems: "center" }}>
                                <Image
                                    source={require('../../assets/download_section.png')}
                                    style={{ width: 35, height: 35, tintColor: color }}
                                />
                                <Dot focused={focused} />
                            </View>
                        ),
                    }}
                />
            </Tab.Navigator>
        </View >
    );
}


export default MainTabNavigator;
