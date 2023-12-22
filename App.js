import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyReactNativeApp from './MyReactNativeApp'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Bunny Yashaswin Goud !!!</Text>
      <StatusBar style="auto" />
      {/* <MyReactNativeApp/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
