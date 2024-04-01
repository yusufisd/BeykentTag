import {React, useState} from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from "react-native";


const Login = ({navigation}) => {
const [isLogin, setIsLogin] = useState(true);
return (
<SafeAreaView style={styles.container}>

{isLogin ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Giriş Yap')}>
            <View style={styles.card}>
              <Text style={styles.custom_text}>Sürücü Ol</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Servisler')}>
            <View style={styles.card}>
              <Text style={styles.custom_text}>Yolcu Ol</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Giriş Yap')}>
            <View style={styles.card}>
              <Text style={styles.custom_text}>Sürücü Ol</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Giriş Yap')}>
            <View style={styles.card}>
              <Text style={styles.custom_text}>Yolcu Ol</Text>
            </View>
          </TouchableOpacity>
        </>
      )}

</SafeAreaView>
)
}
export default Login;

const styles = StyleSheet.create({
container:{
  padding:3,
  backgroundColor:'lightgray',
  flex:1,
  flexDirection:'row',
  textAlign:'center',
  justifyContent:'center',
  gap:25
},

card:{
  cursor:'pointer',
  marginTop:250,
  textAlign:'center',
  justifyContent:'center',
  padding:2,
  borderRadius:15,
  backgroundColor:'white',
  width:150,
  height:150,
  borderWidth:1,
  borderColor:'black'
},

custom_text:{
  color:'black',
  textAlign:'center',
  fontSize:20
}


});
