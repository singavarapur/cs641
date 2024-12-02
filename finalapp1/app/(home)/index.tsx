import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link} from 'expo-router';
import { Image, ImageBackground } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Button } from '@react-navigation/elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



export default function HomeScreen() {


    const { user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            // Sign out from Clerk
            await signOut();
            // Router will automatically redirect to sign-in due to auth layout
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (!user) return null;



return ( 


<ScrollView style={styles.all}>


            <View style = {styles.main}>

            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.welcomeText}>
                        Welcome back,
                    </Text>
                    <Text style={styles.userName}>
                        {user.firstName || user.emailAddresses[0].emailAddress}
                    </Text>
                </View>
                <TouchableOpacity 
                    onPress={handleLogout}
                    style={styles.logoutButton}
                >
                    <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>
        
             <View style={styles.container1}>
              <Image source={require('./images/healthy.jpg')}  style={styles.image1}/>
              </View>
        
              <View style ={styles.container1} >
              <SafeAreaProvider>
            <SafeAreaView style={styles.container1} edges={['left', 'right']}>
              <ImageBackground source={require('./images/app-icon.gif')} resizeMode="cover" style={styles.image}>
                </ImageBackground>
            </SafeAreaView>
          </SafeAreaProvider>
              </View>


              <View style ={styles.container2} >
              <View>
                <Button color='purple' onPress={() => navigation.navigate('For Ocassional Users')}>
                <ImageBackground source={require('./images/heavy-user.jpg')} style={{ width: 85, height: 100 }}><Text style = {styles.text}>Ocassional</Text></ImageBackground>
                </Button>
                </View>

                <View>
                <Button color='purple' onPress={() => navigation.navigate('For Causal Users')}>
                <ImageBackground source={require('./images/medium-user.jpg')} style={{ width: 85, height: 100 }}><Text style = {styles.text}>Causal</Text></ImageBackground>
                </Button>
                </View>


                <View>
                <Button color='purple' onPress={() => navigation.navigate('For Regular Users')}>
                <ImageBackground source={require('./images/light-user.jpeg')} style={{ width: 85, height: 100 }}><Text style = {styles.text}>Regular</Text></ImageBackground>
                
                </Button>
                </View>

            </View>

              <View style={styles.container1}>
                <Button color='purple' onPress={() => navigation.navigate('About Us')}>
                <Image source={require('./images/aboutus.jpg')} resizeMode="cover" style={styles.image}/>
                </Button>
                </View>
      

      

              </View>
              


          
        
        
        
        
             
        
            
              
              
        
              


              </ScrollView>
              
        
              
        
               
        
            
        
            
          );
        }
        
        const styles = StyleSheet.create({
            all:{
                    flex: 1,
                    backgroundColor: '#f0ffff',

            },
        
          main:{
            backgroundColor:'pink',
        
          },
        
          container1: {
            flexWrap:'wrap',
            flexDirection: "row",
            justifyContent: 'center',
            alignContent:'center',
            borderWidth: 0,
            padding: 0,
          },
        
          container2:{
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            alignContent:'flex-start',
            color:'pink',
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            marginBottom:10,
          },
        
          container: {
            flexDirection: "row",
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            alignContent:'flex-end',
            color:'pink',
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            backgroundColor:'#ffa07a',
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
          baseText: {
            fontFamily: "Arial",
            fontWeight: 'bold',
          },
        
         
          text: {
            color: '#ff7f50',
            fontSize: 15,
            lineHeight: 15,
            textAlign: 'center',
            backgroundColor: 'white',
            fontStyle: 'italic' as 'italic'
            
            
          },
          image: {
            flex: 1,
            justifyContent: 'center',
            alignContent:'stretch',
            height:180,
            marginTop:10,
            marginBottom: 10,
            
          },
          image1: {
            flex: 1,
            justifyContent: 'center',
            alignContent:'center',
            height:100,
            marginTop:10,
            marginBottom: 10,
            
          },

          header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#FFFFFF',
            borderBottomWidth: 1,
            borderBottomColor: '#E0E0E0',
        },
        headerContent: {
            flex: 1,
        },
        welcomeText: {
            fontSize: 16,
            color: '#666666',
        },
        userName: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000000',
            marginTop: 4,
        },
        logoutButton: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#FFF0F0',
            padding: 10,
            borderRadius: 8,
            marginLeft: 10,
        },
        logoutText: {
            color: '#FF3B30',
            marginLeft: 5,
            fontWeight: '600',
        },
        statsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            backgroundColor: '#FFFFFF',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        statCard: {
            alignItems: 'center',
            flex: 1,
        },
        statNumber: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#007AFF',
        },
        statLabel: {
            fontSize: 14,
            color: '#666666',
            marginTop: 4,
        },
        section: {
            padding: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '600',
            color: '#000000',
            marginBottom: 12,
        },
        activityCard: {
            backgroundColor: '#FFFFFF',
            padding: 16,
            borderRadius: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        activityText: {
            fontSize: 16,
            color: '#333333',
            lineHeight: 24,
        },
        emptyText: {
            fontSize: 16,
            color: '#666666',
            textAlign: 'center',
            fontStyle: 'italic',
        },
        
        
        
          
        });