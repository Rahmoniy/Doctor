import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    console.log("=====>>");
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log("Error storing data:", error);
    }
};

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null ? value : null;
    } catch (error) {
        console.log("Error getting data:", error);
        return null;
    }
};