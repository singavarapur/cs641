import React from 'react';
import {FlatList, ImageBackground, SafeAreaView} from 'react-native';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import FlatListExample from './components/FlatListExample';
import ModalExample from './components/ModalExample';
import TextInputExample from './components/TextInputExample';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
  // <SafeAreaView style={styles.container}>
  //     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
  //     <ScrollView
  //       contentContainerStyle={styles.scrollView}
  //       refreshControl={
  //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  //       }>
  //       <Text style = {styles.text}>Pull down to see RefreshControl indicator</Text>
  //     </ScrollView>
  //     <Text style={styles.text}>Inside</Text>
  //   </ImageBackground> 
  // </SafeAreaView>
  <>
  <ModalExample/>
  <FlatListExample/>
  <TextInputExample/>
  </>
  

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
   image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;