import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function OcassionalUser() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Skincare & Makeup Tutorials</Text>

      <View>
        <View style={styles.tutorialCard}>
          <Image
            source={require('./images/oskincare.gif')}
            style={styles.tutorialImage}
          />
          <View>
            <Text style={styles.tutorialTitle}>
              Skincare Routine for Glowing Skin
            </Text>
            <Text style={styles.tutorialDescription}>
              Start your day with this simple and effective morning skincare
              routine for a healthy and glowing complexion.
            </Text>

            <Text style={styles.routineHeader}>Morning Routine:</Text>
            <Text style={styles.tutorialDescription}>• Cleanse</Text>
            <Text style={styles.tutorialDescription}>• Moisturize</Text>
            <Text style={styles.tutorialDescription}>• Sunscreen</Text>

            <Text style={styles.routineHeader}>Evening Routine:</Text>
            <Text style={styles.tutorialDescription}>• Cleanse</Text>
            <Text style={styles.tutorialDescription}>
              • Moisturize (Night cream if desired)
            </Text>
            <Text style={styles.tutorialDescription}>• Toner</Text>
            <Text style={styles.tutorialDescription}>
              • Serum (Optional, but helpful for specific concerns)
            </Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.tutorialCard}>
          <Image
            source={require('./images/omakeup.gif')}
            style={styles.tutorialImage}
          />
          <View>
            <Text style={styles.tutorialTitle}>Makeup for Glowing Skin</Text>

            <Text style={styles.routineHeader}>1. Skincare First</Text>
            <Text style={styles.tutorialDescription}>
              Before applying makeup, make sure your skin is clean, moisturized,
              and protected with sunscreen. This helps your makeup go on
              smoothly and stay in place.
            </Text>

            <Text style={styles.routineHeader}>2. Primer (Optional)</Text>
            <Text style={styles.tutorialDescription}>
              Apply a small amount of primer (mattifying for oily skin,
              hydrating for dry skin) to your face after moisturizing.
            </Text>

            <Text style={styles.routineHeader}>3. Foundation or Tinted Moisturizer</Text>
            <Text style={styles.tutorialDescription}>
              Apply a small amount using your fingers, a makeup sponge, or a
              foundation brush. Start in the center of your face and blend
              outward.
            </Text>

            <Text style={styles.routineHeader}>4. Concealer</Text>
            <Text style={styles.tutorialDescription}>
              Apply a creamy concealer that’s one or two shades lighter than
              your skin tone under your eyes to brighten dark circles.
            </Text>

            <Text style={styles.routineHeader}>5. Blush</Text>
            <Text style={styles.tutorialDescription}>
              Choose a cream or powder blush that complements your skin tone
              (peachy or pink shades for lighter skin, deeper rose or berry
              tones for darker skin).
            </Text>

            <Text style={styles.routineHeader}>6. Eyebrows</Text>
            <Text style={styles.tutorialDescription}>
              Use a brow pencil or powder that matches your natural brow color.
              Lightly fill in any sparse areas using short, feathery strokes for
              a natural effect.
            </Text>

            <Text style={styles.routineHeader}>7. Mascara</Text>
            <Text style={styles.tutorialDescription}>
              Apply mascara to your upper lashes, wiggling the wand at the base
              of your lashes and sweeping it up towards the tips.
            </Text>

            <Text style={styles.routineHeader}>8. Setting Spray (Optional)</Text>
            <Text style={styles.tutorialDescription}>
              Hold the setting spray at arm’s length and lightly mist your face
              after finishing your makeup.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffeef8', // Soft light pink background
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
    color: '#d5006d', // Bright pink for header
    fontWeight: 'bold',
    fontFamily: 'Montserrat', // Use a stylish font
  },
  tutorialCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#ffffff', // White background for cards
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  tutorialImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 10,
  },
  tutorialTitle: {
    fontSize: 24,
    marginBottom: 5,
    color: '#c2185b', // Stylish pink for titles
    fontWeight: 'bold',
    fontFamily: 'Montserrat', // Use a modern font
  },
  tutorialDescription: {
    marginBottom: 10,
    fontSize: 16,
    color: '#555555', // Darker gray for text
    lineHeight: 22, // Increased line height for readability
  },
  routineHeader: {
    fontSize: 20,
    marginVertical: 10,
    color: '#d5006d', // Bright pink for section titles
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#f8bbd0', // Light pink underline
    paddingBottom: 5,
  },
});
