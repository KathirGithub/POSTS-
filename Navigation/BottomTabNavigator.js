import React from 'react'
import CreateStory from '../Screens/createStory'
import Feed from '../Screens/Feed'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
render(){
  return(
    <Tab.Navigator    screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = "home";
              } else if (route.name === "Story") {
                iconName = "add-circle-outline";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                  size={size}
                />
              )
            }
            })}>
    <Tab.Screen name='Feed' component={Feed} options={{headerShown:false}}/>
    <Tab.Screen name='Story' component ={CreateStory} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}
}