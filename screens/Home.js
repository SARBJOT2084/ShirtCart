import { View, Text, ScrollView, Image, FlatList, KeyboardAvoidingView, KeyboardAvoidingViewBase } from 'react-native'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Carosuel from '../components/Carosuel';
import ItemsSlider from '../components/ItemsSlider';
import Brands from '../components/Brands';
import Sale from '../components/Sale';
import Recent from '../components/Recent';
import { Searchbar } from 'react-native-paper';
import { KeyboardAwareScrollView, KeyboardAwareSectionList } from 'react-native-keyboard-aware-scroll-view';

// import { KeyboardAvoidingView } from 'react-native-keyboard-aware-scroll-view';

{/**Navbar(15%),Searchbar(7%),  */ }

const Home = () => {

    return (
        <View className="h-full">
            <Navbar />
          <ScrollView className="h-[80%]">
          <Searchbar iconColor="rgb(244,63,94)" style={{borderWidth:2,borderColor:'rgb(244,63,94)',marginBottom:'5%',height:45,width:'93%',marginLeft:'auto',marginRight:'auto',paddingBottom:5}} cursorColor="rgb(244,63,94)" />
                <ItemsSlider />
                <Carosuel />
                <Sale />
                <Brands />
          </ScrollView>
        </View>
    )
}

export default Home;