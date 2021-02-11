import { Button, Form, Input, Item, Label, View } from 'native-base';
import React, { Component, useState } from 'react';
import { login } from '../api/auth';
import PreLoginContainer, { FormContainer } from '../components/PreLoginContainer';
import { AuthContext } from '../AuthContext';
import { KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../components/Spacer';
import { Text } from '../components/Elements';

const Login = ({navigation}) => {
  const { signIn } = React.useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const onLoginPress = async () =>  {
    try {
      if(userName.trim() == ""){
        alert("Please enter username");
      } else if(password.trim() == "") {
        alert("Please enter password");
      } else {
        setLoading(true);
        const resp = await login({email: userName.toLowerCase(), password});
        if(resp.status){
          await AsyncStorage.setItem('userToken', resp.token);
          signIn({ token: resp.token});
        } else {
          alert(resp.msg);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Some error occured. Please after sometime.")
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <PreLoginContainer>
        <FormContainer>
         
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Email</Label>
            <Input onChangeText={(value)=>setUserName(value)} value={userName} />
          </Item>
          <Spacer height={20} />
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Password</Label>
            <Input onChangeText={(value)=>setPassword(value)} value={password} secureTextEntry={true} />
          </Item>
          <Spacer height={20} />
          <Button style={{ margin: 10, marginTop: 20 }} block info onPress={onLoginPress} disabled={loading}>
            <Text fontColor="white" size="l">{loading ? 'Please wait...' : 'Login'}</Text>
          </Button>
          <Spacer height={20} />
          <View style={{ alignItems: 'center' }}><Text fontColor="white">Don't have an account?</Text></View>
          <Button style={{ margin: 10, marginTop: 20 }} block warning bordered onPress={()=>navigation.navigate('Signup')} disabled={loading}>
            <Text fontColor="white" size="l">Signup</Text>
          </Button>
        </FormContainer>
      </PreLoginContainer>
    </KeyboardAvoidingView>
  )
}

export default Login;