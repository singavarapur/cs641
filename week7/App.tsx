// import { StatusBar } from 'expo-status-bar';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {NavigationContainer} from "@react-navigation/native";

// const Stack = createNativeStackNavigator();

// function Home({navigation}) {
//   return (
//       <View style={styles.container}>
//         <Text>This is home screen</Text>
//           <Button title={"Settings"} onPress={() => navigation.navigate('Settings')}/>
//       </View>
//   );
// }

// function Settings({navigation}) {
//     return (
//         <View style={styles.container}>
//             <Text>This is settings screen</Text>
//             <Button title={"Settings Again"} onPress={() => navigation.navigate('Settings')}/>
//         </View>
//     );
// }


// function Profile({navigation}) {
//   return (
//       <View style={styles.container}>
//           <Text>This is my home</Text>
//           <Button title={"home screen"} onPress={() => navigation.navigate('Home')}/>
//       </View>
//   );
// }


// export default function App() {
//   return (

//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home}/>
//           <Stack.Screen name="Settings" component={Settings}/>
//           <Stack.Screen name="Profile" component={Profile}/>

//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });







import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
      <Button title={"Go to Settings"} onPress={() => navigation.navigate('Settings')} />
      <br></br>
      <Button title={"Go to User Details"} onPress={() => navigation.navigate('Users')} />
    </View>
  );
}

function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is settings screen</Text>
      <Button title={"Go to Home"} onPress={() => navigation.navigate('Home')} />
      <br></br>
      <br></br>
      <Button title={"Go to User Details"} onPress={() => navigation.navigate('Users')} />

    </View>
  );
}

function Users({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is my profile</Text>
      <Button title={"Go to Home"} onPress={() => navigation.navigate('Home')} />
      <br></br>
      <br></br>
      <Button title={"Go to Settings"} onPress={() => navigation.navigate('Settings')} />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
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