import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';
import { Text } from './Elements';
import LinearGradient from 'react-native-linear-gradient';
import { View, Button } from 'native-base';
import Spacer from './Spacer';

const CardContainer = styled(LinearGradient)`
  padding: 10px;
  border-radius: 5px; 
  margin-bottom: 10px;
`;

const PlayerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const StatsContainer = styled.View`
  margin-top: 10px;
  background-color: rgba(52, 52, 52, 0.2);
  border-radius: 5px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const PlayerInfo = styled.View`
`;

const ImageContainer = styled.View`

`;
const ButtonContainer = styled.View`
margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const PlayerCard = ({ player, onDeletePress, onEditPress }) => {
  return (
    <View>

      <CardContainer colors={['#6ee2f5', '#6454f0']}>
        <PlayerContainer>
          <PlayerInfo>
            <Text fontColor="#F00B51" style={{ fontSize: 28 }} semiBold>{player.name}</Text>
            <Text fontColor="#F00B51" style={{ fontSize: 18 }}>{player.teamName}</Text>
            <Text fontColor="#F00B51" style={{ fontSize: 18 }}>{player.age} Years old</Text>
          </PlayerInfo>
          <ImageContainer>
            <Image source={{ uri: player.profileImage }} style={{height: 100, width: 100, flex: 1}} />
          </ImageContainer>
        </PlayerContainer>
        <StatsContainer>
          <Stat title="Matches" number={player.totalMatch} />
          <Stat title="50s" number={player.fifty} />
          <Stat title="100s" number={player.hundreds} />
          <Stat title="Wickets" number={player.totalWickets} />
          <Stat title="5Wickets" number={player.fiveWicketTaken} />
        </StatsContainer>
      <ButtonContainer>
        <Button  small style={{ flex: 1, justifyContent: 'center' }} bordered danger onPress={onDeletePress} >
          <Text fontColor="white">Delete</Text>
        </Button>
        <Spacer style={{ width: 10 }} />
        <Button  small style={{ flex: 1, justifyContent: 'center' }} info bordered onPress={onEditPress} >
          <Text fontColor="white" size="l">Update Info</Text>
        </Button>
      </ButtonContainer>
      </CardContainer>
    </View>
  )
}

export default PlayerCard;


const StatContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Stat = ({ title, number }) => {
  return (
    <StatContainer>
      <Text fontColor="white" semiBold style={{ fontSize: 20 }}>{number}</Text>
      <Text fontColor="white" style={{ fontSize: 12 }}>{title}</Text>
    </StatContainer>
  )
}