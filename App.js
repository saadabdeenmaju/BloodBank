/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View ,SafeAreaView ,ScrollView , Dimensions ,Image} from 'react-native';
import {createDrawerNavigator , createStackNavigator , DrawerItems } from 'react-navigation';
import { Container, Header, Content, Button, Text, Icon, } from 'native-base';
import HomeScreen from './src/Screens/HomeScreen';
import BCADonors from './src/Screens/BCADonor';
import DonorDashboard from './src/Screens/DonorDashboards';
// import DonorRegister from './src/Screens/DonorRegister';
import RequestorDashboard from './src/Screens/RequestorDashboard';
// import RequestorRegister from './src/Screens/RequestorRegister';
import RFBlood from './src/Screens/RFBlood';
import Signin from './src/Screens/Signin';

// import SettingScreen from './SettingScreen';


export default class App extends Component{
  render() {
    return (
      <Container>
        <AppDrawerNavigator/>
      </Container>

    );
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex:1}} >
  <View style = {{height : 150, backgroundColor : 'white', alignItems : 'center' ,justifyContent : 'center'}}>
  <Image source={require('./src/images/logo.png')} style ={{height : 80 , width : 80 , marginTop : 12}}/>
  </View>
  <ScrollView>
    <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator ({
  Home : HomeScreen,
  Become_a_Donor : BCADonors,
  Request_For_Blood: RFBlood,
  Available_Donors: DonorDashboard,
  Blood_Requests : RequestorDashboard,
  Sign_In : Signin,

},{
  contentComponent : CustomDrawerComponent,
  contentOptions : { 
    activeTintColor : 'red'
  }
})

const RootStack = createStackNavigator ({
AppDrawerNavigator
 
})

