import { Button } from 'native-base';
import React, { Component, useEffect, useState } from 'react';
import MainContainer from '../components/MainContainer';
import PlayerCard from '../components/PlayerCard';
import Spacer from '../components/Spacer';
import { Text } from '../components/Elements';
import { FlatList } from 'react-native';
import { deletePlayer, getPlayers } from '../api/player';
import Loading from '../components/Loading';
import { useIsFocused } from '@react-navigation/native';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import styled from 'styled-components';
import { fontSize } from '../styles/Fonts';

const EmptyList =styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  border-radius: 7px;
`;

const Players = ({ navigation }) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const isFocused = useIsFocused();
  const [deleteId, setDeleteId] = useState("");
  const [isDeleting, seIsDeleting] = useState(false);
  const getAllPlayers = async () => {
    try {
      setLoading(true);
      const resp = await getPlayers();
      setLoading(false);
      if(resp.status) {
        setAllPlayers(resp.players);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  }
  const deleteOnePlayer = async () => {
    try {
      seIsDeleting(true);
      const resp = await deletePlayer(deleteId);
      setShowDeleteDialog(false);
      seIsDeleting(false);
      if(resp.status) {
        getAllPlayers();
      } else {
        alert(resp.msg);
      }
    } catch (error) {
      seIsDeleting(false);
      alert(error.message);
    }
  }

  useEffect(()=>{
    getAllPlayers();
  },[isFocused]);

  const onEditPress = (item) => {
    navigation.navigate('PlayerForm', {player: item});
  }

  const onDeletePress = (id, index) => {
    setDeleteId(id);
    setShowDeleteDialog(true);
  }

  return (
    <MainContainer title="My Players" back={false}>
      <Button block onPress={()=>navigation.navigate('PlayerForm')} >
        <Text fontColor="white">Add New Player</Text>
      </Button>
      <Spacer />
      { 
        loading ? 
        <Loading /> :
        <FlatList
          ListEmptyComponent={<EmptyList><Text size="xl"> No player available.</Text></EmptyList>}
          data={allPlayers}
          renderItem={({item,index})=><PlayerCard key={item.id} player={item} onEditPress={()=>onEditPress(item)} onDeletePress={()=>onDeletePress(item._id, index)} />}
        />
      }
      <ConfirmDialog
          title="Delete player!"
          visible={showDeleteDialog}
          onTouchOutside={() => setShowDeleteDialog(false)}
          positiveButton={{
              title: "YES",
              onPress: deleteOnePlayer
          }}
          negativeButton={{
              title: "NO",
              onPress: () => setShowDeleteDialog(false)
          }}
      >
        {
          isDeleting ? <Loading /> : <Text>Do you want to delete player ?</Text>
        }
      </ConfirmDialog>
    </MainContainer>
  )
}

export default Players;