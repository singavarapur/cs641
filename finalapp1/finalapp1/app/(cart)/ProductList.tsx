import React from 'react';
import { useCart } from './CartContent';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import Cart from './cart';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'CeraVe Moisturizer', price: 10, 
    description:
    "Suitable for Dry Skin. Its gentle, non-irritating formula is free of fragrances, making it suitable for those with sensitivity concerns.", 
  image:'https://www.byrdie.com/thmb/ugDnv7uG7Nip4FX9w_9scCG4ZQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HERO-59e8ed41efd24d66b26ca756c6f3076e.jpg',},

  
  { id: 2, name: 'Insta Natural Toner', price: 20, 
    description:" Suitable for all skin types. A skincare product designed to refresh, tone, and brighten the skin. It often contains Vitamin C as the key active ingredient, known for its antioxidant properties, which help protect the skin from environmental damage and promote an even skin tone.", 
    image:'https://images-na.ssl-images-amazon.com/images/I/81CeRnqx6TL._SL1500_.jpg',},

  { id: 3, name: 'Derma Face Serum', price: 18, 
      description:"Suitable for all skin types. A skincare product designed to deliver concentrated active ingredients deep into the skin.", 
      image:'https://m.media-amazon.com/images/I/51urZJ--MsL._SL1200_.jpg',},
  { id: 4, name: 'VaniCream Skin Care Set', price: 60, 
        description:"Suitable for Dry skin. Wide range of products that are focused to deliver smooth skin and gives protection towards UV rays.", 
        image:'https://dsom-imager-prod.shipt.com/17425434-27/1-5cfe29523f036b01ba0d128fb969a1cd.jpeg',},

 { id: 5, name: 'MAYBELLINE NEW YORK CONCEALER', price: 60, 
          description:"Effectively conceals dark circles and fine lines, Hydrating formula that helps to prevent creasing ,Lightweight and comfortable on the skin.", 
          image:'https://facetocurls.com/wp-content/uploads/2015/02/Maybelline-Fit-Me-Concealer-Review3.jpg',},

 { id: 6, name: 'Rare Beauty Foundation Cream', price: 60, 
           description:"Suitable for oily skin. The foundation is designed to feel weightless on the skin, providing a natural finish that doesn’t feel heavy or cakey. It offers a medium coverage that can be easily built up to full coverage as desired. This allows for customization based on personal preference ", 
          image:'https://i.pinimg.com/originals/ac/13/2d/ac132d238bea95eb4ba7479323ce1d4d.jpg',},

{ id: 7, name: 'Mamaearth Face Wash', price: 60, 
            description:"Suitable for oily skin. This face wash is designed to brighten the skin and reduce tan. It helps cleanse impurities while providing a natural glow.", 
           image:'https://kohimatoday.com/wp-content/uploads/2024/05/21c27046b9f42442adead655852e68b6.png',},         

           
 { id: 8, name: 'KYLIE Lipstick', price: 60, 
            description:"Enhacnes your Beauty by giving a glossy look to your lips and keeps them hydrated for 8 hours.", 
           image:'https://i.pinimg.com/originals/c0/7a/f6/c07af6ca92fa51cc4ff3030ce177e588.jpg',},

{ id: 9, name: 'Plum Green Tea Toner', price: 60, 
   description:"suitable for oily skin. Helps control excess oil production, reducing shine and preventing breakouts. Provides hydration without feeling heavy or greasy, leaving the skin feeling fresh and revitalized.", 
    image:'https://i0.wp.com/www.highongloss.com/wp-content/uploads/2016/10/plum-green-tea-non-alcoholic-toner.jpg?fit=911%2C640&ssl=1',},


  { id: 10, name: 'TINTARK Setting Spray', price: 60, 
            description:"Suitable for oily and dry skin. Lightweight and breathable facial makeup setting spray gives a fresh and natural look. Locks in makeup and maintains a natural matte finish.", 
           image:'https://m.media-amazon.com/images/S/aplus-media-library-service-media/21782a78-a0c9-4b2e-a42a-66dc3f199f54.__CR102,0,960,720_PT0_SX800_V1___.jpg',},

  { id: 11, name: 'KYLIE Eye Shadow', price: 60, 
            description:"Palettes often have a mix of neutral tones and bold colors, making them versatile for everyday wear or more dramatic looks. These provide a different texture and finish compared to powder shadows. They are easy to apply and can be blended for a softer look.", 
           image:'https://i.pinimg.com/originals/bd/94/48/bd9448e9e921b3b3b8d35b31d8fcfebc.jpg',},


  { id: 12, name: 'Lakme Radiance Complexion Compact Powder Set', price: 60, 
            description:"A finely milled pressed powder, this Radiance Complexion Compact from Lakme is made using a whisperlight formula and gives your skin a silky smooth and even-toned finish.", 
           image:'https://i.pinimg.com/736x/42/b0/85/42b0850f3fffd2c890752abda70d49ec.jpg',},   


  { id: 13, name: 'Neutrogena HydroBoost Hyaluronic Acid Serum', price: 60, 
          description:"Suitable for Dry skin. The serum has a lightweight, gel-like texture that absorbs quickly into the skin without leaving a greasy residue, making it suitable for all skin types, including oily and combination skin",
          image:'https://m.media-amazon.com/images/I/71Z+wNMRYYL._SL1500_.jpg',}, 
           
          
          
];

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    Alert.alert(
      'Product Added',
      `${product.name} has been added to your cart.`,
      [{ text: 'OK', onPress: () => console.log(`${product.name} acknowledged`) }],
      { cancelable: true } // Allow dismissal by tapping outside the alert
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product) => (
          <View style={styles.productCard} key={product.id}>
            <Text style={styles.productTitle}>
              {product.name} - ${product.price}
            </Text>
            <Image source={{ uri: product.image }} resizeMode="cover" style={styles.productImage} />
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text>{"\n"}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(product)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <Text>{"\n"}</Text>
          </View>
        ))}
        <Cart />
      </View>
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'pink',
  },
  productCard: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic' as 'italic',
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  button: {
    backgroundColor: '#e6e6fa',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
