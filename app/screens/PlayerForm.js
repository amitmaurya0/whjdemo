import React, { Component, useState, useEffect } from 'react';
import { TextInput, View, Image } from 'react-native';
import { inputView } from '../styles/ExternalStyle';
import MainContainer from '../components/MainContainer';
import { Button } from 'native-base';
import { Text } from '../components/Elements';
import { savePlayer, updatePlayer } from '../api/player';
import {launchImageLibrary} from 'react-native-image-picker';
import styled from 'styled-components';

const ImagePickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PlayerForm = ({ route, navigation }) => {
  const [playerId, setPlayerId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [teamName, setTeamName] = useState('');
  const [totalMatch, setTotalMatch] = useState('');
  const [fifty, setFifty] = useState('');
  const [hundreds, setHundreds] = useState('');
  const [totalWickets, setTotalWickets] = useState('');
  const [fiveWicketTaken, setFiveWicketTaken] = useState('');
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [pickedImage, setPickedImage] = useState(null);
  const submitForm = async () => {
    try {
      if(name.trim() == "") {
        alert("Please enter player's name.");
      } else if (age.trim() == "") {
        alert("Please enter player's age.");
      } else if (teamName.trim() == "") {
        alert("Please enter player's country.");
      } else if (totalMatch.trim() == "") {
        alert("Please enter total match played.");
      } else if (fifty.trim() == "") {
        alert("Please enter total 50s scored.");
      } else if (hundreds.trim() == "") {
        alert("Please enter total 100s scored.");
      } else if (totalWickets.trim() == "") {
        alert("Please enter total wicket taken.");
      } else if (fiveWicketTaken.trim() == "") {
        alert("Please enter 5 wicket taken in a match.");
      } else {
        let resp = {};
        const data = {name, age, teamName, totalMatch, fifty, hundreds, totalWickets, fiveWicketTaken, image: pickedImage ? pickedImage.avatarSource : undefined};
        if(playerId){
          resp = await savePlayer(data, playerId);
        } else {
          resp = await savePlayer(data);
        }
        setLoading(false);
        if(resp.status){
          navigation.goBack();
        } else {
          alert(resp.msg);
        }
      }
    } catch (error) {
      setLoading(false);
      alert("Some error occured. Please try after sometime."+error.message);
    }
  }

  const selectImage = () => {
    const options = {
      mediaType: 'photo'
    }
    launchImageLibrary(options, function(response){
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source;
        // You can display the image using either:
        source = { uri: 'data:image/jpeg;base64,' + response.data, isStatic: true };

        const temp = response.data;

        //Or:
        if (Platform.OS === 'android') {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace('file://', ''), isStatic: true };
        }
        setProfileImage(source.uri);
        setPickedImage({
          avatarSource: source,
          imgBase64: temp,
        });
      }
    })
  }

  useEffect(()=>{
    if(route.params) {

      const { player } = route.params;
      if(player) {
        setName(player.name);
        setAge(player.age);
        setTeamName(player.teamName);
        setTotalMatch(player.totalMatch);
        setFifty(player.fifty);
        setHundreds(player.hundreds);
        setTotalWickets(player.totalWickets);
        setFiveWicketTaken(player.fiveWicketTaken);
        setPlayerId(player._id);
        setProfileImage(player.profileImage);
      }
    }
  }, []);

  return (
    <MainContainer title={playerId ? 'Update Player' : 'Add New Player'}>
      <ImagePickerContainer>
        <Button block info onPress={selectImage} style={{ width: 200 }}>
          <Text fontColor="white">{profileImage ? "Change Image" : 'Select Image'}</Text>
        </Button>
        <View>
          { profileImage != "" ? <Image source={{ uri: profileImage }} style={{height: 100, width: 100, flex: 1}} /> : <View></View>}
        </View>
      </ImagePickerContainer>
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Enter player name'}
        onChangeText={value => setName(value) }
        blurOnSubmit={false}
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={name}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Enter Age name'}
        onChangeText={value => setAge(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={age}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Enter Team name'}
        onChangeText={value => setTeamName(value) }
        blurOnSubmit={false}
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={teamName}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Total match played'}
        onChangeText={value => setTotalMatch(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={totalMatch}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Total 50s scored'}
        onChangeText={value => setFifty(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={fifty}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Total 100s scored'}
        onChangeText={value => setHundreds(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={hundreds}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Total Wicket Taken'}
        onChangeText={value => setTotalWickets(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={totalWickets}
      />
      <TextInput
        autoCorrect={false}
        style={{...inputView.inputStyle, }}
        placeholderStyle={inputView.inputPlaceHolderStyle}
        placeholder={'Total 5 wicket taken in a match'}
        onChangeText={value => setFiveWicketTaken(value) }
        blurOnSubmit={false}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        value={fiveWicketTaken}
      />
      <Button block onPress={submitForm} disabled={loading}>
        <Text fontColor="white">{loading ? 'Please wait...' : 'Submit'}</Text>
      </Button>
    </MainContainer>
  )
}

export default PlayerForm;