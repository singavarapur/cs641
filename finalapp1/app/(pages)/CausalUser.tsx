import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ImageBackground } from 'react-native';

export default function CausalUser() {
  return (


    <ScrollView style={styles.container}>
      <Text style={styles.header}>Skincare & Makeup Tutorials</Text>

      
      <View>
        <View style={styles.tutorialCard}>
          <Image source={require('./images/skincare-tut.gif')} alt="Skincare Routine" style={styles.tutorialImage} />
          <View>
            <Text style={styles.tutorialTitle}>Skincare Routine for Glowing Skin</Text>
            <Text style={styles.tutorialDescription}>
              Start your day with this simple and effective morning skincare routine for a healthy and glowing complexion.</Text>
              <Text></Text>
              <Text>Morning Routine:</Text>

                <Text style={styles.tutorialDescription}>Cleanse</Text>
                <Text style={styles.tutorialDescription}>Moisturize</Text>
                <Text style={styles.tutorialDescription}>Sunscreen</Text>
                <Text></Text>


                
                <Text>Evening Routine:</Text>

                <Text style={styles.tutorialDescription}>Cleanse</Text>
                <Text style={styles.tutorialDescription}>Moisturize (Night cream if desired)</Text>
                <Text style={styles.tutorialDescription}>Optional: Treatment (Serum or mask once or twice a week)</Text>
                <Text></Text>
                <Text>Weekly Routine:</Text>


                <Text style={styles.tutorialDescription}>Exfoliate 1–2 times a week</Text>
               <Text style={styles.tutorialDescription}>Use a hydrating mask once a week</Text>



            
          </View>
        </View>
      </View>


      <View>
        <View style={styles.tutorialCard}>
          <Image source={require('./images/makeup-tut.gif')} alt="Skincare Routine" style={styles.tutorialImage} />
          <View>
            <Text style={styles.tutorialTitle}>Makeup for Glowing Skin</Text>
                  <Text>
                1.Prep Your Skin</Text>
                  

                <Text style={styles.tutorialDescription}>
                Cleanse your face with a gentle cleanser that suits your skin type.</Text>
                <Text style={styles.tutorialDescription}>Moisturize with a lightweight, hydrating moisturizer to keep your skin soft and ready for makeup.</Text>
                
                <Text></Text>
                
                <Text>2. Foundation (Optional)</Text>

                <Text style={styles.tutorialDescription}>If you prefer a natural look, opt for a BB cream, tinted moisturizer, or a light foundation. This will give you coverage without feeling heavy.</Text>
                <Text style={styles.tutorialDescription}>Apply a small amount to your face and blend with your fingers, a makeup sponge, or a foundation brush for a seamless finish.</Text>
                <Text></Text>
                
                <Text>3. Concealer for Spot Treatment</Text>

                <Text style={styles.tutorialDescription}>Use a concealer that’s slightly lighter than your skin tone for under the eyes and matching your skin tone for blemishes or redness.</Text>
               <Text></Text>

               <Text>4. Blush for a Natural Flush</Text>

                <Text style={styles.tutorialDescription}>Choose a cream blush or powder blush in a soft pink or peach tone (depending on your skin tone)</Text>
               <Text></Text>


               <Text>5. Setting Your Makeup</Text>
               <Text style={styles.tutorialDescription}>If you have oily skin or need your makeup to last longer, lightly mist a setting spray over your face to lock in your makeup.</Text>
               <Text></Text>


               



            
          </View>
        </View>
        </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({


  container: {
    maxWidth: 800,
    margin: 0,
    padding: 20,
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor:'#ffdab9',
  
  },
  header: {
    textAlign: 'center' as 'center',
    fontSize: 25,
    marginBottom: 30,
    color: '#ff4500',
    fontWeight:'bold' as 'bold',
  },

  tutorialCard1: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    padding: 10,
    marginBottom: 20,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor:'white',
    
  },

  
  sectionTitle: {
    fontSize: 25,
    margin: 20,
    color: '#ff4500',
    fontWeight:'bold' as 'bold',
  },
  tutorialCard: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    padding: 10,
    marginBottom: 20,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    backgroundColor:'white',
  },
  tutorialImage: {
    width: 300,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
  },
  tutorialTitle: {
    fontSize: 25,
    margin: 5,
    color: '#ff6347',
    fontWeight:'bold' as 'bold',
  },
  tutorialDescription: {
    margin: 0,
    fontSize: 15,
    color: '#666',
    fontStyle: 'italic' as 'italic',
  },

  
});
