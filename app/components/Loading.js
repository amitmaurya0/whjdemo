import React, { Component } from 'react';
import { View ,ActivityIndicator,Text} from 'react-native';
import Spacer from './Spacer';
// import { Spinner, Text } from 'native-base';
//import { color } from '../constants/constant';


const Loading = ({ loading=true, color='#F6AB27' }) =>{
    if(!loading)
        return null;
    return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center',}}>

        <ActivityIndicator color={color} />
        <Spacer />
        <Text style={{ color: color }} >Please wait...</Text>
    </View>
)}

export default Loading;