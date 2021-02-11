import React, { Component } from 'react';
import { Body, Container, Header, Left, Title, Content, Right, Button, Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/img/arrow_back.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text } from './Elements';
import { AuthContext } from '../AuthContext';
import { Image } from 'react-native';
const MainContainer = ({ title, children, back=true }) => {
  const navigation = useNavigation();
  const { signOut } = React.useContext(AuthContext);

  const onLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    signOut();
  }

  return (
    <Container>
      <Header>
        {back && <Left>
          <Button transparent onPress={()=>navigation.goBack()}>
            <Image source={backIcon} style={{ height: 20, width: 20, flex: 0.4 }} />
          </Button>
        </Left>}
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onLogout}>
            <Text fontColor="white" >Logout</Text>
          </Button>
        </Right>
      </Header>
      <Content contentContainerStyle={{ margin: 10 }}>
        {children}
      </Content>
    </Container>
  )
}

export default MainContainer;