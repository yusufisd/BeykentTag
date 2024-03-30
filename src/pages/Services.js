import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Image } from "react-native";


const App = () => {
return (
<SafeAreaView style={styles.container}>



    <Text style={styles.pageTitle}>SEFERLER</Text>


    <View style={styles.card}>
        <Text style={styles.card_title}>AYAZAĞA - ESENLER</Text>
        <View style={styles.card_hr} />
        <View style={styles.card_container}>
            <Image style={styles.image} source={require('../../assets/icon.png')}></Image>
            <View style={styles.container_content}>
                <Text>Gidiş Saati: 17:00</Text>
                <Text>Kapasite: 2</Text>
                <Text>Ücret: 70 TL</Text>
            </View>
        </View>
    </View>

    <View style={styles.card}>
        <Text style={styles.card_title}>K.ÇEKMECE - AYAZAĞA</Text>
        <View style={styles.card_hr} />
        <View style={styles.card_container}>
            <Image style={styles.image} source={require('../../assets/icon.png')}></Image>
            <View style={styles.container_content}>
                <Text>Gidiş Saati: 17:00</Text>
                <Text>Kapasite: 2</Text>
                <Text>Ücret: 70 TL</Text>
            </View>
        </View>
    </View>

    <View style={styles.card}>
        <Text style={styles.card_title}>ATAŞEHİR - AYAZAĞA</Text>
        <View style={styles.card_hr} />
        <View style={styles.card_container}>
            <Image style={styles.image} source={require('../../assets/icon.png')}></Image>
            <View style={styles.container_content}>
                <Text>Gidiş Saati: 17:00</Text>
                <Text>Kapasite: 2</Text>
                <Text>Ücret: 70 TL</Text>
            </View>
        </View>
    </View>

    <View style={styles.card}>
        <Text style={styles.card_title}>ESENLER - AYAZAĞA</Text>
        <View style={styles.card_hr} />
        <View style={styles.card_container}>
            <Image style={styles.image} source={require('../../assets/icon.png')}></Image>
            <View style={styles.container_content}>
                <Text>Gidiş Saati: 17:00</Text>
                <Text>Kapasite: 2</Text>
                <Text>Ücret: 70 TL</Text>
            </View>
        </View>
    </View>



</SafeAreaView>

)
}



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

export default App;
