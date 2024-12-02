import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { ScrollView,} from 'react-native';
import { Image } from 'react-native';




export default function DetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
  
                <Image source={require('./images/aboutus-1.jpg')} resizeMode="cover" style={styles.image}/>
                </View>
      
      <Text style={styles.tagline}>Your Beauty Journey Starts Here!</Text>
      <View style={styles.content}>
        <View style={styles.section}>
        <Text style={styles.title}>Be the Way You Want to Be</Text>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text>
            Our mission is to empower individuals to express their beauty through personalized recommendations and expert advice. We believe that beauty is unique to each person, and we strive to help you discover what makes you feel beautiful.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text>
            We envision a world where everyone has access to the best beauty products and tips tailored to their unique needs. Our goal is to create a community of beauty enthusiasts who support and inspire each other.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet the Team</Text>
          <Text>
            Our team is made up of beauty experts, skincare enthusiasts, and tech innovators who are passionate about helping you find the best products and tips for your beauty routine.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.testimonialsTitle}>What Our Users Say</Text>
          <Text style={styles.testimonial}>“This app transformed my beauty routine!” - Happy User</Text>
          <Text style={styles.testimonial}>“I love the personalized recommendations!” - Satisfied Customer</Text>
          <Text style={styles.testimonial}>“Ocassional, Regular, Causal users?. BeautyU has got you covered” - Valued Customer</Text>
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
    fontWeight:'bold' as 'bold',
    color: '#333',
    backgroundColor:'#add8e6',
    
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    alignContent:'stretch',
    height:250,
    marginTop:10,
    marginBottom: 10,
    
  },

  container1: {
    flexWrap:'wrap',
    flexDirection: "row",
    justifyContent: 'center',
    alignContent:'center',
    borderWidth: 0,
    padding: 0,
  },

  title: {
    textAlign: 'center' as 'center',
    fontSize: 20,
    marginBottom: 10,
    color: '#ff4081',
  },
  tagline: {
    textAlign: 'center' as 'center',
    fontSize: 18,
    marginBottom: 20,
    fontStyle: 'italic' as 'italic',
    fontWeight:'bold' as 'bold',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    gap: '20px',
  },
  section: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    
  },
  sectionTitle: {
    marginTop: 0,
    color: '#ff4081',
    fontWeight:'bold',
  },
  testimonialsTitle: {
    textAlign: 'center' as 'center',
    marginTop: 40,
    fontSize: 15,
    color: '#ff4081',
  },
  testimonial: {
    textAlign: 'center' as 'center',
    fontStyle: 'italic' as 'italic',
    margin: 20,
    padding: 10,
    borderLeftWidth:4,
  },
  contact: {
    textAlign: 'center' as 'center',
    marginTop: 40,
  },
  contactTitle: {
    fontSize: 1.5,
    color: '#ff4081',
  },
  contactInfo: {
    marginTop: 10,
  },
});






