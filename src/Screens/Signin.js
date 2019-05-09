import React, {Component} from "react";
import { ImageBackground } from 'react-native';
import {Header, Left , Right ,Icon , Button, Container, Content , Text , Item ,Form ,Input, Card, Radio , ListItem ,Picker ,Body , Title} from 'native-base';
import styles from './stylizing';

class Signin extends Component {
  static navigationOptions = {
    drawerIcon  : ({tintColor})=>(
      <Icon name = "key" style = {{fontSize : 24 , color:tintColor}}></Icon>
    )
  }
    render () {
        return (
            <Container>
            <ImageBackground source={require('../images/allbg1.png')} style = {styles.mainbg}>
                <Content>
                <Header>
              <Title style ={styles.title}>Sign In</Title>
              </Header>
                    <Left>
                    <Icon ios='ios-menu' android="md-menu" onPress = { () =>this.props.navigation.openDrawer()} 
                    style={styles.headicon}/>
                    </Left>
                    <Card style = {styles.donorform}>
                      <Form>
                        <Item>
                          <Input placeholder="Email Address" />
                        </Item>
                        <Item>
                          <Input placeholder="Password" />
                        </Item>
                      </Form>
                      </Card>
                      <Button full dark onPress = {() =>   this.props.navigation .navigate ('')}>
            <Text>SIGN IN</Text>
          </Button>
                    </Content>
                </ImageBackground>
                </Container>
        );
    }
}

export default Signin;