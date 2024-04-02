import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
                    <Fontisto name='date' size={20} color='black'/>
                    <Text>Tarih: 24/01/2024</Text>
                </View>
                <View style={styles.info_content}>
                    <AntDesign name="clockcircleo" size={20} color="black" />
                    <Text>Saat: 13:00</Text>
                </View>
                <View style={styles.info_content}>
                    <Ionicons name="person" size={20} color="black" />
                    <Text>Kapasite: 2</Text>
                </View>
                <View style={styles.info_content}>
                    <FontAwesome name="turkish-lira" size={20} color="black" />
                    <Text>Fiyat: 170</Text>
                </View>
            </View>


            <View style={styles.card_hr} />

            <View style={styles.person}>
                <Text style={styles.person_content}>Yusuf İshak Damar</Text>
                <View style={styles.stars}>
                    <AntDesign name="staro" size={24} color="black" />
                    <AntDesign name="staro" size={24} color="black" />
                    <AntDesign name="staro" size={24} color="black" />
                    <AntDesign name="staro" size={24} color="black" />
                    <AntDesign name="staro" size={24} color="black" />
                </View>
                <Text style={styles.stars}>Henüz yorum yapılmadı.</Text>
            </View>

            <View style={styles.button}>
                <Text style={{ textAlign:'center',color:'white', padding:10, fontSize:15 }}>Randevu Oluştur</Text>
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
        height:500,
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
        flexDirection:'row',
        marginBottom:20
    },
    info:{
        flexDirection:'column',
        height:170,
        gap:20
    },
    info_content:{
        flexDirection:'row',
        gap:10
    },
    title:{
        color:'black',
        padding:30

    },
    card_hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom:15,
        marginLeft:25,
        marginRight:25,
    },
    person:{
        flex:1,
        flexDirection:'column'
    },
    person_content:{
        textAlign:'center',
        fontSize:20
    },
    stars:{
        textAlign:'center',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:10
    },
    button:{
        justifyContent:'center',
        backgroundColor:'black',
        borderRadius:15
    }
});
