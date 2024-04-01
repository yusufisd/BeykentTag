import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Services from './src/pages/Services';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import FirstPage from './src/pages/FirstPage';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();
const App = () => {
return (
<NavigationContainer>
  <Stack.Navigator>

    <Stack.Screen name="Servisler" component={Services} />
    <Stack.Screen name="İçerik Detay" component={Detail} />
    <Stack.Screen name="Sürücü Ol/Yolcu Ol" component={FirstPage} />
    <Stack.Screen name="Giriş Yap" component={Login} />
    <Stack.Screen name="Kayıt Ol" component={Register} />

  </Stack.Navigator>
</NavigationContainer>
);
};

export default App;
