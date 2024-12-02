import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Image,ScrollView } from 'react-native';





export default function RegularUser() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Skincare & Makeup Tutorials</Text>

      
      <View>
        <View style={styles.tutorialCard}>
          <Image source={require('./images/rskincare.gif')} alt="Skincare Routine" style={styles.tutorialImage} />
          <View>
            <Text style={styles.tutorialTitle}>Skincare Routine for Glowing Skin</Text>
            
              <Text></Text>
              <Text>Morning Routine:</Text>

                <Text style={styles.tutorialDescription}>Cleanse</Text>
                <Text style={styles.tutorialDescription}>Moisturize</Text>
                <Text style={styles.tutorialDescription}>Serum (optional)</Text>
                <Text style={styles.tutorialDescription}>Moisturizer</Text>
                <Text style={styles.tutorialDescription}>Sunscreen</Text>
                <Text></Text>


                
                <Text>Evening Routine:</Text>

                <Text style={styles.tutorialDescription}>Makeup Remover</Text>
                <Text style={styles.tutorialDescription}>Cleanser</Text>
                <Text style={styles.tutorialDescription}>Exfoliate (2-3 times a week)</Text>
                <Text style={styles.tutorialDescription}>Toner (optional)</Text>
                <Text style={styles.tutorialDescription}>Treatment/Serum</Text>
                <Text style={styles.tutorialDescription}>Overnight Mask (optional, 1-2 times a week)</Text>

                <Text></Text>


            
          </View>
        </View>
      </View>


      <View>
        <View style={styles.tutorialCard}>
          <Image source={require('./images/rmakeup.gif')} alt="Skincare Routine" style={styles.tutorialImage} />
          <View>
            <Text style={styles.tutorialTitle}>Makeup for Glowing Skin</Text>
                
            <Text>1. Skincare First</Text>

                <Text style={styles.tutorialDescription}>
                Before applying makeup, make sure your skin is clean, moisturized, and protected with sunscreen. This helps your makeup go on smoothly and stay in place.</Text>
                
                <Text></Text>
                
                <Text>2. Primer (Optional)</Text>

                <Text style={styles.tutorialDescription}>Apply a small amount of primer (mattifying for oily skin, hydrating for dry skin) to your face after moisturizing.</Text>
                <Text></Text>
                
                <Text>3. Foundation or Tinted Moisturizer</Text>

                <Text style={styles.tutorialDescription}>Apply a small amount using your fingers, a makeup sponge, or a foundation brush. Start in the center of your face and blend outward..</Text>
               <Text></Text>

               <Text>4. Concealer</Text>

                <Text style={styles.tutorialDescription}>Apply a creamy concealer that’s one or two shades lighter than your skin tone to under your eyes to brighten dark circles.</Text>
               <Text></Text>


               <Text>5. Blush</Text>
               <Text style={styles.tutorialDescription}>Choose a cream or powder blush that complements your skin tone (peachy or pink shades for lighter skin, deeper rose or berry tones for darker skin).</Text>
               <Text></Text>


               <Text>6. Eyebrows</Text>
               <Text style={styles.tutorialDescription}>Use a brow pencil or powder that matches your natural brow color,
               Lightly fill in any sparse areas using short, feathery strokes for a natural effect.</Text>
               <Text></Text>

               <Text>7. Mascara</Text>
               <Text style={styles.tutorialDescription}>Apply mascara to your upper lashes, wiggling the wand at the base of your lashes and sweeping it up towards the tips.</Text>
               <Text></Text>

               <Text>8. Setting Spray (Optional)</Text>
               <Text style={styles.tutorialDescription}>Hold the setting spray at arm’s length and lightly mist your face after finishing your makeup.</Text>
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

