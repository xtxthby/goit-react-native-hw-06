
// import { Provider } from 'react-redux';
// import Main from './Screens/Main';
// import { store, persistor } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Text } from 'react-native';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
//         <Main />
//       </PersistGate>
//     </Provider>
//   );
// }







import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Main } from './components/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
}