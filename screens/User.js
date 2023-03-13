import { View, Text, Image, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

function Info() {
    return (<View className="pt-[20%] px-[10%]">
        <View className="flex flex-row">
            <View className="mr-auto fixed">
                <Text className="text-xl font-bold">Hello,Aman</Text>
            </View>
            <View className="ml-auto">
                <Image source={{ uri: 'https://tse3.mm.bing.net/th?id=OIP.QkSJibSZK5yLbcN_F7OxIgHaHa&pid=Api&P=0' }} className="h-12 w-12 rounded-full" />
            </View>


        </View>
    </View>)
}
const data = [
    {
        id: 1,
        text: 'Orders',
    },
    {
        id: 2,
        text: 'Buy Again',
    }

];
const data2 = [{
    id: 1,
    text: 'Wishlist',
}, {
    id: 2,
    text: 'Your Cart',
}]
const options = [{
    id: 1,
    text: 'Your Orders',
}, {
    id: 2,
    text: 'Edit profile',
}, {
    id: 3,
    text: 'Login and security',

}, {
    id: 4,
    text: 'Your Addresses',
}
    , {
    id: 5,
    text: 'Content and devices',
},
{
    id: 6,
    text: 'Manage your profile',
}, {
    id: 7,
    text: 'Notififcation settings',
},
{
    id: 8,
    text: 'Change Theme',
}]
function Options({ props }) {
    return (<View className="py-2 px-2">
        <View className="border-2 rounded-lg border-gray-300 h-16 w-32">
            <Pressable className="mx-auto my-auto" onPress={() => { console.log("Orders"); }}>
                <Text className="text-lg mx-auto my-auto">{props.text}</Text>

            </Pressable>

        </View>
    </View>);
}
function UpcomingOrders() {
    return (<View className="h-42 mt-4 w-full">
        <Text className="mx-3 text-lg font-bold">Your Upcoming Orders</Text>
        <View className="mx-auto w-11/12 py-5 flex flex-row">
            <View className="mr-auto">
                <Image source={{ uri: 'https://rukminim1.flixcart.com/image/612/612/xif0q/shirt/9/g/h/40-vhsfbcub378144-van-heusen-original-imaggkhbdjz62xfa.jpeg?q=70' }} resizeMode="stretch" className="h-40 w-32 rounded" />
            </View>
            <View className="ml-auto">
                <Text className="text-lg text-center font-bold">Vanhuesen</Text>
                <Text className="text-xs">S Men Shirt 998</Text>
                <Text className="text-xs text-green-600">Arriving by Tuesday</Text>
                <Text className="text-xs">at Mohali,140308</Text>
                <Pressable onPress={() => { console.log("Track order!!!!") }} className="h-12 border-2 border-gray-400 rounded mt-2"><Text className="my-auto mx-auto">Track Order</Text></Pressable>
            </View>
        </View>
    </View>)
}
function Settings({ props }) {
    return (

        <View className="border-b-2 border-b-gray-200 w-11/12 mx-auto">
            <Text className="text-lg ml-5">{props.text}</Text>
        </View>);
}
const User = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Info />
            <FlatList data={data} renderItem={({ item }) => <Options props={item} />} horizontal showsHorizontalScrollIndicator={false} className="mx-auto" />
            <FlatList data={data2} renderItem={({ item }) => <Options props={item} />} horizontal showsHorizontalScrollIndicator={false} className="mx-auto" />
            {/**Orders which are coming  */}
            <UpcomingOrders />



            <Text className="text-lg ml-[5%] font-bold">Account Settings</Text>
            <View className="border-gray-200 border-2 w-11/12 mx-auto rounded-2xl">
                {options.map((item) => (<View className="text-lg  border-b-2 border-b-gray-200 mx-4  flex flex-row" key={item.id}><Text className="mr-auto">{item.text}</Text><Text className="ml-auto"><Icon name="arrow-right" size={20}/></Text></View>))}
            </View> 


        </ScrollView>
    )
}

export default User
