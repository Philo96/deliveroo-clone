import React, {useLayoutEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView>
            <View>
                <Text className='text-red-500'>Home Screen</Text>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
