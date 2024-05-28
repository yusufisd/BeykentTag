import React, { useEffect, useState } from "react";
import Card from '../components/Services/Card';
import {  Text, TextInput, StyleSheet, TouchableOpacity,SafeAreaView, ScrollView,  } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCHc6R-pLjxqK9Wq2r2NXrUPqAMp70ZHM",
    authDomain: "beykenttag.firebaseapp.com",
    projectId: "beykenttag",
    storageBucket: "beykenttag.appspot.com",
    messagingSenderId: "116644081560",
    appId: "1:116644081560:web:22c5c9da8b28803dd845ed",
    measurementId: "G-4FWDS63WK7"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const fetchServices = async () => {
    const servicesSnapshot = await getDocs(collection(db, 'Services'));
    const servicesList = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return servicesList;
  };


const App = ({navigation}) => {
    const [services, setServices] = useState([]);
    const loadServices = async () => {
        const fetchedServices = await fetchServices();
        setServices(fetchedServices);
      };
    useEffect(() => {
        loadServices();
        console.log(services)
      }, []);
return (
<SafeAreaView style={styles.container}>
    <Text style={styles.pageTitle}>SEFERLER</Text>
    <ScrollView>
    { datas.map((data) => (
        <TouchableOpacity onPress={() => navigation.navigate('İçerik Detay')}>
            <Card data={data}/>
        </TouchableOpacity>
    ))}
    </ScrollView>
</SafeAreaView>
)};
export default App;

const datas = [
    {
        from:'Küçükçekmece',
        to:'Ayazağa',
        price:150,
        capacity:3,
        date:'15/04/2024',
        time:'15:00'
    },
    {
        from:'Esenler',
        to:'Ayazağa',
        price:250,
        capacity:1,
        date:'02/04/2024',
        time:'08:30'
    },
    {
        from:'Hadımköy',
        to:'Ataşehir',
        price:350,
        capacity:3,
        date:'05/03/2024',
        time:'14:00'
    },
    {
        from:'Taksim',
        to:'Maltepe',
        price:350,
        capacity:3,
        date:'12/04/2024',
        time:'12:00'
    }
];

const styles = StyleSheet.create({
container:{
padding:3,
backgroundColor:'lightgray',
flex:1,
flexDirection:'column',
overflow:'scroll'
},
card:{
marginLeft:50,
marginRight:50,
backgroundColor:'white',
borderRadius:15,
marginBottom:40,
},
card_title:{
paddingTop:25,
paddingRight:25,
paddingLeft:25,
textAlign:'center',
color:'black',
fontSize:20,
fontWeight:'bold',
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

