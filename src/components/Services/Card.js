import React from 'react'
import icon from '../../../assets/icon.png';
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Card = (data) => {
  return (
    <View style={styles.card}>
        <View style={styles.first_card}>
          <MaterialIcons name="mode-of-travel" size={35} color="black" />
          <Text style={styles.card_title}>{data.data.from} - {data.data.to}</Text>
        </View>

        <View style={styles.card_hr} />
        
        <View style={styles.second_card}>

          <View style={{ flex:1,flexDirection:'column', gap:15 }}>

            <View style={{ flex:1,flexDirection:'row', gap:10, justifyContent:'center' }}>
              <View style={{ flex:1, flexDirection:'row',gap:5 }}>
                <Fontisto name='date' size={20} color='black'/>
                <Text>{data.data.date}</Text>
              </View>  
              <View style={{ flex:1, flexDirection:'row',gap:5, justifyContent:'center' }}>
                <AntDesign name="clockcircleo" size={20} color="black" />
                <Text>{data.data.time}</Text>
              </View> 
            </View>  

            <View style={{ flex:1,flexDirection:'row', gap:10, justifyContent:'center' }}>
              <View style={{ flex:1, flexDirection:'row',gap:5 }}>
                <Ionicons name="person" size={20} color="black" />
                <Text>{data.data.capacity} KİŞİ</Text>
              </View>  
              <View style={{ flex:1, flexDirection:'row',gap:5, justifyContent:'center' }}>
                <FontAwesome name="turkish-lira" size={20} color="black" />
                <Text>{data.data.price}</Text>
              </View> 
            </View>  

          </View>      
        </View>
        
    </View>
  )
}
export default Card;

const styles = StyleSheet.create({


    card:{
    marginLeft:40,
    marginRight:40,
    backgroundColor:'white',
    borderRadius:15,
    marginBottom:40,
    borderWidth:1,
    borderColor:'black'
    },

    card_title:{
    textAlign:'center',
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    },
    

    card_hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom:5,
    marginLeft:25,
    marginRight:25,
    },

    first_card:{
      flex:1,
      flexDirection:'row',
      gap:10,
      padding:10
    },

    second_card:{
      flex:1,
      flexDirection:'column',
      paddingHorizontal:30,
      paddingVertical:15

    },
    
    });
