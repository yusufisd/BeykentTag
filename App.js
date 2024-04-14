import * as React from 'react';
import Services from './src/pages/Services';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import FirstPage from './src/pages/FirstPage';
import Detail from './src/pages/Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
const App = () => {
return (
<Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Giriş Yap" component={Login} />
      <Stack.Screen name="Sürücü Ol/Yolcu Ol" component={FirstPage} />
      <Stack.Screen name="Servisler" component={Services} />
      <Stack.Screen name="İçerik Detay" component={Detail} />
      <Stack.Screen name="Kayıt Ol" component={Register} />

    </Stack.Navigator>
  </NavigationContainer>
</Provider>

);
};

export default App;
