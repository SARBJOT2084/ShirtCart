import { View, Text, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
export default function Login() {
    let [fontsLoaded] = useFonts({
        Inter_900Black,
        DancingScript_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View className="space-y-6">
            <Text className="mx-auto mt-32 text-5xl " style={{ fontFamily: 'DancingScript_700Bold' }}>
                Login
            </Text>
            <TextInput placeholder="Email " className="w-11/12 mx-auto bg-gray-200  h-12 rounded-lg pl-9" />
            <TextInput placeholder="Password" className="w-11/12 mx-auto bg-gray-200 h-12 rounded-lg pl-9" secureTextEntry={true} />
            <Pressable name="Login" className="mx-auto w-3/5 h-12 bg-black rounded-lg " onPress={() => { console.log("Login succesfull!!") }}>
                <Text className="text-white mx-auto my-auto ">LOGIN</Text>
            </Pressable>
            <View className="flex flex-row w-11/12 mx-auto">
                <Text className="text-xs mr-auto text-blue-700 underline">Forgot Password</Text>
                <Text className="ml-auto">Remember me!</Text>
            </View>
            <View className="bg-gray-400 h-[1px] w-11/12 mx-auto">
            </View>
            <Text className="bg-white text-black mx-auto bottom-10">Or</Text>
            <Pressable
                onPress={() => { console.log("Google!!!!") }}
                className="bg-gray-200 h-10 w-11/12 mx-auto rounded-xl"><View className="flex flex-row space-x-2 mx-auto my-auto">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/281/281764.png' }} className="w-7 h-7" />
                    <Text className="mx-auto my-auto font-semibold">Sign up with google</Text></View>
            </Pressable>
            <Pressable
                onPress={() => { console.log("Apple!!!!") }}
                className="bg-gray-200 h-10 w-11/12 mx-auto rounded-xl"><View className="flex flex-row space-x-2 mx-auto my-auto">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/15/15476.png' }} className="w-7 h-7" />
                    <Text className="mx-auto my-auto font-semibold">Sign up with Apple</Text></View>
            </Pressable>
            <Pressable
                onPress={() => { console.log("Microsoft!!!!") }}
                className="bg-gray-200 h-10 w-11/12 mx-auto rounded-xl"><View className="flex flex-row space-x-2 mx-auto my-auto">
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/732/732221.png' }} className="w-7 h-7" />
                    <Text className="mx-auto my-auto font-semibold">Sign up with Microsoft</Text></View>
            </Pressable>
        </View>
    );
}