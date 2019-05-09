import React, {Component} from "react";
import { ImageBackground } from 'react-native';
import {Header, Left , Right ,Icon , Button, Container, Content , Text , Item ,Form ,Input, Card, Radio , ListItem ,Picker ,Body , Title} from 'native-base';
import styles from './stylizing';

class BCADonor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: "key2"
        };
      }
      onValueChange(value: string) {
        this.setState({
          selected: value
        });
      }
      static navigationOptions = {
        drawerIcon  : ({tintColor})=>(
          <Icon name = "people" style = {{fontSize : 24 , color:tintColor}}></Icon>
        )
      }
    render () {
        return (
    <Container>
<ImageBackground source={require('../images/allbg1.png')} style = {styles.mainbg}>
    <Content>
    <Header>
    <Title style ={styles.title}>Become a Donor</Title>
    </Header>
        <Left>
        <Icon ios='ios-menu' android="md-menu" onPress = { () =>this.props.navigation.openDrawer()} 
        style={styles.headicon}/>
        </Left>
        <Card style = {styles.donorform}>
          <Form>
            <Item>
              <Input placeholder="Full Name" />
            </Item>
            <Item>
              <Input placeholder="Email Address" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Item>
              <Input placeholder="Contact Number" />
            </Item>
            <Item>
              <Input placeholder="Age" />
            </Item>
            <Item>
              <Input placeholder="Facebook Link" />
            </Item>
            <Content>
                <Text style = {styles.BGroup}>Your Blood Group</Text>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="(A+)" value="key0" />
              <Picker.Item label="(A-)" value="key1" />
              <Picker.Item label="(B+)" value="key2" />
              <Picker.Item label="(B-)" value="key3" />
              <Picker.Item label="(O+)" value="key4" />
              <Picker.Item label="(O-)" value="key5" />
              <Picker.Item label="(AB+)" value="key6" />
              <Picker.Item label="(AB-)" value="key7" />
            </Picker>
        </Content>
          </Form>
          </Card>
          <Button full success onPress = {() =>   this.props.navigation .navigate ('Available_Donors')}>
            <Text>Register Now</Text>
          </Button>
        </Content>
    </ImageBackground>
    </Container>
        );
    }
}

export default BCADonor;