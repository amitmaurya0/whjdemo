import React, { Component } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { fontFamily, fontSize } from '../styles/Fonts';

/* const TEXT_INPUT_PROPS = {
  icon: String,
  color: String,
  placeholder: String
} */

const InputContainer = styled.View`
  border-bottom-width: 1px;
  width: 100%;
  border-bottom-color: ${({ borderColor }) => borderColor ? borderColor : '#c0c0c0' };
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column' };
  ${({ horizontal }) => horizontal && `align-items: center;` };
  margin-top: 10px;
  margin-bottom: 5px;
  padding-bottom: ${ Platform.OS === 'ios' ? `5px` : '0px' } ;
  ${({ multiline }) => multiline && `height: 100px;
  ` };

`;

const Input = styled.TextInput`
  width: 92%;
  font-family: ${fontFamily.regular};
  ${({color}) => color && `color: ${color}`}
  height: ${ Platform.OS === 'ios' ? `30px` : '40px' } ;
`;

const LabelText = styled.Text`
  color: ${color.grey};
  
`;

const TextInput = ({ inputRef, maxLength, prefix,options=[], type = "text", disabled, multiline, numberOfLines, label, icon, iconFamily="Ionicons", iconSize=24, color, placeholder, password, on, onChangeText=()=>{}, keyboardType='default', borderColor, horizontal=true, value, onPress=false }) => {
  return (
    <InputContainer borderColor={borderColor} multiline={multiline} horizontal={horizontal}>
      {onPress && <TouchableOpacity onPress={onPress} style={{ position: 'absolute', left:0, right: 0, top:0, bottom:0, zIndex: 9999 }}></TouchableOpacity>}
      {/* {label && <LabelText>{label}</LabelText> } */}
      {/* {icon && <Icon name={icon} family={iconFamily} style={{ color: color ? color : '#000000', fontSize: iconSize, width: 26, marginRight: 10 }} />} */}
      {(prefix && horizontal) && <LabelText style={{ color: color, marginLeft: -5 }}>{prefix}</LabelText> }
      {
        type ==  "dropdown" ?
         null
        :
        horizontal ?
        <Input ref={inputRef} maxLength={maxLength} disabled={disabled} value={value} multiline={multiline} numberOfLines={numberOfLines} keyboardType={keyboardType} secureTextEntry={password} color={color} placeholderTextColor={color} placeholder={placeholder} onChangeText={onChangeText} />
        :
        <View style={multiline ? { flexDirection: 'row', height: 90 } : { height: Platform.OS === 'ios' ? 30 : 40, flexDirection: 'row', alignItems: 'center' }}>
          {prefix && <LabelText style={{ color: color, marginRight: Platform.OS === 'ios' ? 5 : 0 }}>{prefix}</LabelText> }
          <Input style={multiline ? { left: prefix ? 20 : 0, height: 90, textAlignVertical: "top" } : { marginTop: 1 }} ref={inputRef} maxLength={maxLength} disabled={disabled} value={value} multiline={multiline} numberOfLines={numberOfLines} keyboardType={keyboardType} secureTextEntry={password} color={color} placeholderTextColor={color} placeholder={placeholder} onChangeText={onChangeText} />
        </View>
        
      }
    </InputContainer>
  )
}

export default TextInput;