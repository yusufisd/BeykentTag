import React from 'react'
import { View, Text, Button, StyleSheet, SafeAreaView, Image, TextInput } from "react-native";


const FirstPage = ({navigation}) => {
return (
<SafeAreaView style={styles.container}>
    <View style={styles.card}>

      <View style={styles.mega_content}>
        <Text style={styles.content}>Test</Text>
        <Text style={styles.content}>Test</Text>
      </View>

    </View>
</SafeAreaView>
)
}
export default FirstPage;

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

content:{
  padding:3,
  borderColor:'black',
  backgroundColor:'white',
  gap:5
},

mega_content:{
  flex:1,
  flexDirection:'row',

}


});
