import React, {Component} from "react";
import {ImageBackground , Linking} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button , Icon, Title } from 'native-base';
import Communications from 'react-native-communications';
import styles from './stylizing';

class DonorDashboard extends Component {
  static navigationOptions = {
    drawerIcon  : ({tintColor})=>(
      <Icon name = "warning" style = {{fontSize : 24 , color:tintColor}}></Icon>
    )
  }
    render () {
        return (
    <Container>
<ImageBackground source={require('../images/allbg1.png')} style = {styles.mainbg}>
    <Content>
    <Header>
    <Title style ={styles.title}>Available Donors List</Title>
    </Header>
        <Left>
        <Icon ios='ios-menu' android="md-menu" onPress = { () =>this.props.navigation.openDrawer()} 
        style={styles.headicon}/>
        </Left>   
    </Content>
    <List style = {styles.Donorlist}>
      <ListItem thumbnail>
              <Body>
                <Text>David Wallance</Text>
                <Text note numberOfLines={1}>(A+)</Text>
                <Text onPress={ ()=> Linking.openURL('https://facebook.com/saad.abdeen.1')}>Click to Open Facebook URL</Text>
              </Body>
              <Right>
                <Button transparent onPress = {()=>Communications.phonecall('03022007680' , true)}>
                  <Text>Call</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
    </ImageBackground>
    </Container>
        );
    }
}

export default DonorDashboard;