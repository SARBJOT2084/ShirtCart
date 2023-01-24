import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Product from './screens/Product';
import User from './screens/User';
import Wishlist from './screens/Wishlist';
import Icon from 'react-native-vector-icons/Feather';
import H from 'react-native-vector-icons/Foundation';
import P from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Cart from './screens/Cart';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              if (focused) {
                return <H name="home" size={27} color="rgb(244,63,94)" />
              }
              return <Icon name="home" size={25} />
            }
            else if (route.name === 'Products') {
              if (focused) {
                return <P name="ios-grid" size={25} color="rgb(244,63,94)" />
              }
              return <P name="ios-grid-outline" size={25} />
            }
            else if (route.name === 'User') {

              if (focused) {
                return <FontAwesome name="user" size={27} color="rgb(244,63,94)" />
              }
              return <FontAwesome name="user-o" size={25} />
            }
            else if (route.name === 'Wishlist') {
              if (focused) {
                return <FontAwesome name="heart" size={25} color="rgb(244,63,94)" />
              }
              return <FontAwesome name="heart-o" size={23} />
            }
            else {
              if (focused) {
                return <P name="cart" size={25} color="rgb(244,63,94)" style={{ borderBottomColor: 'blue', }} />
              }
              return <P name="cart-outline" size={25} />
            }

            // You can return any component that you like here!

          },
          tabBarActiveTintColor: '#eb4d4b',
          tabBarInactiveTintColor: 'gray',

          tabBarStyle: { paddingBottom: 'auto', paddingTop: 'auto', height: 60, },
          headerShown: false,
          tabBarShowLabel: false,


        })

        }
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Product} options={{ tabBarBadge: '2', tabBarBadgeStyle: { height: 22, backgroundColor: 'rgb(244,63,94)', bottom: 12, } }} />
        <Tab.Screen name="User" component={User} />

        <Tab.Screen name="Wishlist" component={Wishlist} options={{ tabBarBadge: '1', tabBarBadgeStyle: { height: 22, backgroundColor: 'rgb(244,63,94)', bottom: 12, } }} />

        <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: '0', tabBarBadgeStyle: { height: 22, backgroundColor: 'rgb(244,63,94)' } }} />

      </Tab.Navigator>
    </NavigationContainer>

  );
}
