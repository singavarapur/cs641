import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.ts  to start working on your new app!</Text>
      <Text>Welcome to pace</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large"/>
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
