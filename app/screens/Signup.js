import { Button, Form, Input, Item, Label } from 'native-base';
import React, { Component, useState } from 'react';
import { signup } from '../api/auth';
import PreLoginContainer, { FormContainer } from '../components/PreLoginContainer';
import { AuthContext } from '../AuthContext';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spacer from '../components/Spacer';
import { Text } from '../components/Elements';

const Signup = ({navigation}) => {
  const { signIn } = React.useContext(AuthContext);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  
  const onSignupPress = async () =>  {
    try {
      if(name.trim() == ""){
        alert("Please enter name");
      }else if(userName.trim() == ""){
        alert("Please enter email");
      } else if(password.trim() == "") {
        alert("Please enter password");
      } else {
        setLoading(true);
        const resp = await signup({email: userName.toLowerCase(), name, password});
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
      <PreLoginContainer title="Signup">
        <FormContainer>
         
          <Item floatingLabel>
            <Label style={{ color: 'white' }}>Name</Label>
            <Input onChangeText={(value)=>setName(value)} value={name} />
          </Item>
          <Spacer height={20} />
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
          <Button style={{ margin: 10, marginTop: 20 }} block info onPress={onSignupPress} disabled={loading}>
            <Text fontColor="white" size="l">{loading ? 'Please wait...' : 'Signup'}</Text>
          </Button>
          <Spacer height={20} />
          <View style={{ alignItems: 'center' }}><Text fontColor="white">Already have an account?</Text></View>
          <Button style={{ margin: 10, marginTop: 20 }} block warning bordered onPress={()=>navigation.goBack()} disabled={loading}>
            <Text fontColor="white" size="l">Login</Text>
          </Button>
        </FormContainer>
      </PreLoginContainer>
    </KeyboardAvoidingView>
  )
}

export default Signup;