import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.card}>
            <View style={styles.card_header}>
                <MaterialIcons name="mode-of-travel" size={35} color="black" />
                <Text style={styles.card_title}> Küçükçekmece - Esenler</Text>
            </View>
            <View style={styles.card_hr} />
            <View style={styles.info}>
                <View style={styles.info_content}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Text>12:00</Text>
                </View>
                <View style={styles.info_content}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Text>12:00</Text>
                </View>
                <View style={styles.info_content}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Text>12:00</Text>
                </View>
            </View>

        </View>


    </SafeAreaView>
  )
}
export default Detail;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray',
    },
    card:{
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'black',
        borderRadius:15,
        width:335,
        height:200,
        marginHorizontal:30,
        marginVertical:30,
        padding:25,
        flexDirection:'column'
    },
    card_icon:{
        flex:1
    },
    card_title:{
        flex:3,
        fontSize:22,
        textAlign:'center',
        justifyContent:'center',
        marginTop:2
    },
    card_header:{
        flex:1,
        flexDirection:'row',
    },
    info:{
        flex:1,
        flexDirection:'column',
        gap:5,
        height:300
    },
    info_content:{
        flex:1,
        flexDirection:'row'
    },
    title:{
        color:'black',
        padding:30

    },
    card_hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:5,
        marginLeft:25,
        marginRight:25,
    },
    
});
