import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { setIsLoading } from '../redux/userSlice';
import { login } from '../redux/userSlice';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [sifre,setSifre] = useState('')
  const {isLogin} = useSelector((state) => state.user)
  const dispatch = useDispatch()
return (
<SafeAreaView style={styles.container}>
    <View style={styles.card}>

      <Text style={styles.card_title}>Giriş Yap</Text>
      <TextInput placeholder='Email' style={styles.input} onChangeText={newEmail => setEmail(newEmail)} ></TextInput>
      <TextInput placeholder='Şifre' style={styles.input} onChangeText={newSifre => setSifre(newSifre)} ></TextInput>
      <Button  title='Gönder' onPress={()=>dispatch(login({email,sifre}))} ></Button>

      <Text style={{ marginTop:10 }}>Hesabın yok mu? 
        <Text
          style={{color:'blue' }}
          onPress={() =>
            navigation.navigate('Kayıt Ol')
          }
          >Kayıt Ol!</Text>
      </Text>

    </View>
</SafeAreaView>
)
}
export default Login;

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
marginTop:300,
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
