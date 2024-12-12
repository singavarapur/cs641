import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';

export default function Check() {
    const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    const slideAnim = React.useRef(new Animated.Value(100)).current; // Initial value for slide animation
    const navigation = useNavigation();

    React.useEffect(() => {
        // Start the fade-in and slide-up animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, slideAnim]);

    // Function to handle social media link clicks
    const handleLinkPress = (url) => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.messageContainer, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                <Icon name="checkmark-circle" size={80} color="#4CAF50" />
                <Text style={styles.message}>Your Order Has Been Placed!</Text>
                <Text style={styles.subMessage}>Thank you for your purchase.</Text>
            </Animated.View>
            <View style={styles.socialMediaContainer}>
                <Text style={styles.followUs}>Follow us on:</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.facebook.com')}>
                        <Icon name="logo-facebook" size={40} color="#3b5998" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.instagram.com')}>
                        <Icon name="logo-instagram" size={40} color="#C13584" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://twitter.com')}>
                        <Icon name="logo-twitter" size={40} color="#1DA1F2" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.linkedin.com')}>
                        <Icon name="logo-linkedin" size={40} color="#0077B5" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleLinkPress('https://www.pinterest.com')}>
                        <Icon name="logo-pinterest" size={40} color="#E60023" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: 20,
    },
    messageContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    subMessage: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
        marginTop: 5,
    },
    socialMediaContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    followUs: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%', // Adjust based on your layout
    },
});
