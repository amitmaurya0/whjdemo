
import http from './http';
import URLS from '../config/urls';

export const getPlayers = async data => {
  return http
    .get(URLS.players)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return { status: false, msg: "Some error occured. Please try after sometime." }
    })
}

export const savePlayer = async (data, id="") => {
  var form = new FormData();

  if(data.image){
    var photo = {
      uri: data.image.uri,
      type: 'image/png',
      name: 'photo.png',
    };
    form.append("image", photo);
  }
  form.append("name", data.name);
  form.append("age", data.age);
  form.append("teamName", data.teamName);
  form.append("totalMatch", data.totalMatch);
  form.append("fifty", data.fifty);
  form.append("hundreds", data.hundreds);
  form.append("totalWickets", data.totalWickets);
  form.append("fiveWicketTaken", data.fiveWicketTaken);
  
  return http
    .post(URLS.players+"/"+id, form)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return { status: false, msg: "Some error occured. Please try after sometime." }
    })
}

export const updatePlayer = async (data, id) => {
  var form = new FormData();

  if(data.image){
    var photo = {
      uri: data.image.uri,
      type: 'image/png',
      name: 'photo.png',
    };
    alert(JSON.stringify(photo));
    form.append("image", photo);
  }
  form.append("name", data.name);
  form.append("age", data.age);
  form.append("teamName", data.teamName);
  form.append("totalMatch", data.totalMatch);
  form.append("fifty", data.fifty);
  form.append("hundreds", data.hundreds);
  form.append("totalWickets", data.totalWickets);
  form.append("fiveWicketTaken", data.fiveWicketTaken);
  
  return http
    .post(URLS.players+`/${id}`, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return { status: false, msg: "Some error occured. Please try after sometime."+err }
    })
}

export const deletePlayer = async (id) => {
  return http
    .delete(URLS.players+`/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return { status: false, msg: "Some error occured. Please try after sometime." }
    })
}