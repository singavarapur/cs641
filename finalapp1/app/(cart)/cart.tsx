
import React from 'react';
import { useCart } from './CartContent';
import { View,Text, ScrollView, StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from '@react-navigation/elements';
import { Alert } from 'react-native';






export default function Me() {

  const {cart, removeFromCart } = useCart();

  const handleRemove = (productId: number) => {
    Alert.alert(
        "Remove Item",
        "Are you sure you want to remove this item from your cart?",
        [
            { text: "Cancel", style: "cancel" },
            { text: "OK", onPress: () => removeFromCart(productId) }
        ]
    );
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );




  return (
    <ScrollView>
      <Text>Shopping Cart</Text>
      <Text>{"\n"}</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Text>
          {cart.map((product) => (
            <Text key={product.product.id} style={styles.productContainer}>
            <Text style={styles.productName}>{product.product.name}</Text>
            <Text style={styles.productPrice}>${product.product.price}</Text>
            <Text style={styles.productQuantity}>Quantity: {product.quantity}</Text>
            <Text>{"\n"}</Text>
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemove(product.product.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            <Text>{"\n"}</Text>
            

        </Text>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
          </View>
          
        </Text>
        
      )}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
      padding: 16,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  totalContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#ff4500',
    borderRadius: 5,
    alignItems: 'center',
  },
  emptyCartText: {
      fontSize: 18,
      color: 'gray',
  },
  productContainer: {
      marginVertical: 10,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
  },
  productName: {
      fontSize: 18,
      fontWeight: '600',
  },
  productPrice: {
      fontSize: 16,
      color: 'green',
  },
  productQuantity: {
      fontSize: 14,
      color: 'blue',
  },
});
