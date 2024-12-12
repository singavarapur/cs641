import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from '@react-navigation/elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const { user } = useUser();
    const { signOut } = useAuth();
    const router = useRouter();
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (!user) return null;

    return (
        <ScrollView style={styles.all}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.welcomeText}>Welcome back,</Text>
                        <Text style={styles.userName}>
                            {user.firstName || user.emailAddresses[0].emailAddress}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                        <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
                        <Text style={styles.logoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container1}>
                    <Image source={require('./images/healthy.jpg')} style={styles.image1} />
                </View>

                <View style={styles.container1}>
                    <SafeAreaProvider>
                        <SafeAreaView style={styles.container1} edges={['left', 'right']}>
                            <ImageBackground
                                source={require('./images/app-icon.gif')}
                                resizeMode="cover"
                                style={styles.image}
                            />
                        </SafeAreaView>
                    </SafeAreaProvider>
                </View>

                {/* User Type Card */}
                <View style={styles.userTypeCard}>
                    <Text style={styles.userTypeTitle}>
                        We got U covered!<Text>{"\n"}</Text>Select Your User Type:</Text>
                    <View style={styles.userTypeButtons}>
                        <Button color="purple" onPress={() => navigation.navigate('For Ocassional Users')}>
                            Occasional
                        </Button>
                        <Button color="purple" onPress={() => navigation.navigate('For Causal Users')}>
                            Casual
                        </Button>
                        <Button color="purple" onPress={() => navigation.navigate('For Regular Users')}>
                            Regular
                        </Button>
                    </View>
                </View>

                <View style={styles.container1}>
                    <Button color="purple" onPress={() => navigation.navigate('About Us')}>
                        <Image source={require('./images/aboutus.jpg')} resizeMode="cover" style={styles.image} />
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#FFEBEE',
    },
    main: {
        backgroundColor: '#FFEBEE',
    },
    container1: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 0,
        padding: 0,
    },
    userTypeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        margin: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userTypeTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginBottom: 12,
        textAlign: 'center',
    },
    userTypeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    image: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'stretch',
        height: 180,
        marginTop: 10,
        marginBottom: 10,
    },
    image1: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        height: 100,
        marginTop: 10,
        marginBottom: 10,
    },
});
