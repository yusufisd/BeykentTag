import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput,ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../redux/userSlice';
import firestore from '@react-native-firebase/firestore';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCCHc6R-pLjxqK9Wq2r2NXrUPqAMp70ZHM",
  authDomain: "beykenttag.firebaseapp.com",
  projectId: "beykenttag",
  storageBucket: "beykenttag.appspot.com",
  messagingSenderId: "116644081560",
  appId: "1:116644081560:web:22c5c9da8b28803dd845ed",
  measurementId: "G-4FWDS63WK7"
};

const CreateContent = () => {
  const [from,setFrom] = useState('')
  const [to,setTo] = useState('')
  const [price,setPrice] = useState('')
  const [capacity,setCapacity] = useState('')
  const [date,setDate] = useState('')
  const [time,setTime] = useState('')

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);


  const addService = async (from, to, price, capacity, date, time) => {
    try {
      await addDoc(collection(db, 'Services'), {
        from: from,
        to: to,
        price: price,
        capacity: capacity,
        date: date,
        time: time,
        createdAt: new Date()
      });
      console.log('Hizmet başarıyla eklendi!');
    } catch (e) {
      console.error('Hizmet eklenirken hata oluştu: ', e);
    }
  };

  const handleSubmit = () => {
    addService(from, to, price, capacity, date, time);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.card_title}>Servis Ekle</Text>
          <TextInput placeholder='Nereden' style={styles.input} onChangeText={text => setFrom(text)} ></TextInput>
          <TextInput placeholder='Nereye' style={styles.input} onChangeText={text => setTo(text)}></TextInput>
          <TextInput placeholder='Tarih' style={styles.input} onChangeText={text => setDate(text)}></TextInput>
          <TextInput placeholder='Saat' style={styles.input} onChangeText={text => setTime(text)}></TextInput>
          <TextInput placeholder='Kapasite' style={styles.input} onChangeText={text => setCapacity(text)}></TextInput>
          <TextInput placeholder='Fiyat' style={styles.input} onChangeText={text => setPrice(text)}></TextInput>
          <Button  title='kaydet' onPress={handleSubmit} ></Button>
        </View>
    </ScrollView>
</SafeAreaView>
  )
}
export default CreateContent;


const styles = StyleSheet.create({
    container:{
    padding:3,
    backgroundColor:'lightgray',
    flex:1,
    flexDirection:'column'
    },
    
    
    card:{
    marginLeft:50,
    marginRight:50,
    marginTop:20,
    borderRadius:15,
    marginBottom:40,
    },
    
    input:{
      height: 40,
      width: 285,
      marginBottom: 30,
      borderRadius:15,
      paddingHorizontal:20,
      borderWidth: 1,
      padding: 10,
    },
    
    
    
    card_title:{
    paddingTop:25,
    paddingRight:25,
    paddingLeft:25,
    textAlign:'center',
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:50
    },
    
    
    container_content:{
    flex:2,
    marginLeft:20
    },
    
    
    card_container:{
    justifyContent:'space-between',
    flexDirection:'row',
    },
    
    
    page_title:{
    textAlign:'center',
    color:'black',
    fontSize:30,
    marginTop:35,
    },
    
    
    hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom:45,
    marginTop:25,
    marginLeft:35,
    marginRight:35,
    },
    
    
    card_hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom:5,
    marginLeft:25,
    marginRight:25,
    marginTop:15,
    },
    
    
    
    container_title:{
    color:'black',
    fontSize:15,
    textAlign:'center',
    },
    image:{
    width:60,
    height:60,
    marginLeft:30,
    marginTop:10,
    marginBottom:20,
    flex:1,
    },
    pageTitle:{
    marginTop:10,
    marginBottom:20,
    width:'full',
    color:'black',
    fontSize: 30,
    textAlign:'center',
    },
    
    });
