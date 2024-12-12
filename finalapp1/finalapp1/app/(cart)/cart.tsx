import React from 'react';
import { useCart } from './CartContent';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export default function Me() {
  const { cart, removeFromCart, checkout } = useCart();
  const navigation = useNavigation();

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

  const handleCheckout = () => {
    checkout();
    navigation.navigate('Checkout'); // Navigate to the checkout screen
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <View>
          {cart.map((item) => (
            <View key={item.product.id} style={styles.productContainer}>
              {item.product.imageUrl && (
                <Image source={{ uri: item.product.imageUrl }} style={styles.productImage} />
              )}
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.product.name}</Text>
                <Text style={styles.productPrice}>${item.product.price.toFixed(2)}</Text>
                <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemove(item.product.id)}
                accessibilityLabel={`Remove ${item.product.name} from cart`}
                accessible={true}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
          </View>
          <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFEBEE',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  emptyCartText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 50,
  },
  productContainer: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#27ae60',
    marginVertical: 5,
  },
  productQuantity: {
    fontSize: 16,
    color: '#555',
  },
  removeButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#eafaf1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#3498db', // Primary color
    paddingVertical: 15, // Vertical padding for a better touch target
    borderRadius: 10, // Rounded corners
    alignItems: 'center',
    justifyContent: 'center', // Center the content
    shadowColor: '#000', // Add shadow for depth
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  checkoutButtonText: {
    color: 'white', // Text color
    fontWeight: 'bold', // Bold text for emphasis
    fontSize: 18, // Slightly larger font size
  },
});
