import * as React from 'react';
import Services from './src/pages/Services';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import FirstPage from './src/pages/FirstPage';
import Detail from './src/pages/Detail';
import {NavigationContainer} from '@react-navigation/native';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
return (
<Provider store={store}>
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Sürücü Ol/Yolcu Ol" component={FirstPage} />
      <Drawer.Screen name="Giriş Yap" component={Login} />
      <Drawer.Screen name="Servisler" component={Services} />
      <Drawer.Screen name="İçerik Detay" component={Detail} />
      <Drawer.Screen name="Kayıt Ol" component={Register} />
    </Drawer.Navigator>
  </NavigationContainer>
</Provider>

);
};

export default App;
