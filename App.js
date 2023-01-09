import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Platform } from 'react-native';
import { Provider } from 'react-redux';
import Home from './src/components/Home';
import {store} from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.select({android:24, ios:47})
  },
});
