import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function CausalUser() {
  const tutorials = [
    {
      image: require('./images/skincare-tut.gif'),
      title: 'Skincare Routine for Glowing Skin',
      description:
        'Start your day with this simple and effective morning skincare routine for a healthy and glowing complexion.',
      routines: [
        {
          title: 'Morning Routine:',
          steps: ['Cleanse', 'Moisturize', 'Sunscreen'],
        },
        {
          title: 'Evening Routine:',
          steps: [
            'Cleanse',
            'Moisturize (Night cream if desired)',
            'Optional: Treatment (Serum or mask once or twice a week)',
          ],
        },
        {
          title: 'Weekly Routine:',
          steps: ['Exfoliate 1–2 times a week', 'Use a hydrating mask once a week'],
        },
      ],
    },
    {
      image: require('./images/makeup-tut.gif'),
      title: 'Makeup for Glowing Skin',
      description: 'Achieve a radiant look with these makeup tips.',
      routines: [
        {
          title: 'Prep Your Skin',
          steps: [
            'Cleanse your face with a gentle cleanser that suits your skin type.',
            'Moisturize with a lightweight, hydrating moisturizer.',
          ],
        },
        {
          title: 'Foundation (Optional)',
          steps: [
            'Use a BB cream or light foundation for a natural look.',
            'Blend for a seamless finish.',
          ],
        },
        {
          title: 'Concealer for Spot Treatment',
          steps: ['Use a concealer that’s slightly lighter for under the eyes.'],
        },
        {
          title: 'Blush for a Natural Flush',
          steps: ['Choose a cream or powder blush in a soft tone.'],
        },
        {
          title: 'Setting Your Makeup',
          steps: ['Lightly mist a setting spray to lock in your makeup.'],
        },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Skincare & Makeup Tutorials</Text>
      {tutorials.map((tutorial, index) => (
        <View key={index} style={styles.tutorialCard}>
          <Image source={tutorial.image} style={styles.tutorialImage} />
          <Text style={styles.tutorialTitle}>{tutorial.title}</Text>
          <Text style={styles.tutorialDescription}>{tutorial.description}</Text>
          {tutorial.routines.map((routine, routineIndex) => (
            <View key={routineIndex} style={styles.routineContainer}>
              <Text style={styles.sectionTitle}>{routine.title}</Text>
              {routine.steps.map((step, stepIndex) => (
                <Text key={stepIndex} style={styles.tutorialDescription}>
                  • {step}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}
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
    fontFamily: 'Montserrat', // Make sure to load this font
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
    height: 200,
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
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
    color: '#d5006d', // Bright pink for section titles
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#f8bbd0', // Light pink underline
    paddingBottom: 5,
  },
  routineContainer: {
    marginBottom: 15,
  },
});
