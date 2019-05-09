import React, {Component} from "react";
import { ImageBackground } from 'react-native';
import {Header, Left , Right ,Icon , Button, Container, Content , Text} from 'native-base';
import styles from './stylizing';

class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon  : ({tintColor})=>(
          <Icon name = "home" style = {{fontSize : 24 , color:tintColor}}></Icon>
        )
      }
    render () {
        return (
    <Container>
<ImageBackground source={require('../images/mainbg.png')} style = {styles.mainbg}>
    <Content>
        <Left >
        <Icon ios='ios-menu' android="md-menu" onPress = { () =>this.props.navigation.openDrawer()} 
        style={styles.headiconmain}/>
        </Left>
    </Content>
    <Content style = {styles.mainbtn}>
          <Button full transparent success onPress = {() =>   this.props.navigation .navigate ('Become_a_Donor')}>
          <Icon name = "people" />
          <Text>
              Become a Donor
          </Text>
          </Button>
          <Button full transparent danger onPress = {() =>   this.props.navigation .navigate ('Request_For_Blood')}>
          <Icon name = "help" />
          <Text>
              Request for blood
          </Text>
          </Button>
          </Content>
          </ImageBackground>
          </Container>

        );
    }
}

export default HomeScreen;