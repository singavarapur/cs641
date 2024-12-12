import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import{ useRef, useLayoutEffect } from 'react';
import { CartProvider, useCart } from '../(cart)/CartContent';
import ProductList from '../(cart)/ProductList';
import Cart from '../(cart)/cart';
import { Button } from '@react-navigation/elements';




export default function MessagesScreen() {
    

return(
    <View style={styles.container}>
        <CartProvider>
      
        <ProductList />
      
    </CartProvider>
    </View>
        
    
);
}


const styles = StyleSheet.create({
  container: {
 padding: 10,
    backgroundColor: 'pink',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:10,
    color: '#ff4500',
    backgroundColor:'pink',
  },
});

