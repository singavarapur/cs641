import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, Image, View,  } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text >text 1</Text>
      <Text>text 2</Text>
      <Image source = {{uri: "https://wallpaperaccess.com/full/8210053.jpg"}} style={styles.tinyLogo}></Image>
      <ActivityIndicator></ActivityIndicator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 500,
    height: 500,
  }
});
