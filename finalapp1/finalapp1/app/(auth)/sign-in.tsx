import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
} from 'react-native-reanimated';

export default function Page() {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Animation shared values
    const titleOpacity = useSharedValue(0);
    const formTranslation = useSharedValue(50);
    const buttonScale = useSharedValue(1);

    useEffect(() => {
        // Start animations when the component mounts
        titleOpacity.value = withTiming(1, { duration: 800 });
        formTranslation.value = withTiming(0, { duration: 800 });
    }, []);

    const titleStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
    }));

    const formStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: formTranslation.value }],
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ scale: buttonScale.value }],
    }));

    const onSignInPress = React.useCallback(async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace('/');
            } else {
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, [isLoaded, emailAddress, password]);

    return (
        <View style={styles.container}>
            {/* App Title */}
            <Animated.Text style={[styles.appTitle, titleStyle]}>BeautyU</Animated.Text>
            <Animated.Text style={[styles.caption, titleStyle]}>Be the way U want to be</Animated.Text>

            {/* Welcome Title */}
            <Animated.Text style={[styles.title, titleStyle]}>Welcome Back!</Animated.Text>

            {/* Animated Form */}
            <Animated.View style={[styles.form, formStyle]}>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email Address"
                    placeholderTextColor="#aaa"
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </Animated.View>

            {/* Animated Button */}
            <Animated.View style={buttonStyle}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        buttonScale.value = withSpring(1.1, {}, () => {
                            buttonScale.value = withSpring(1);
                        });
                        onSignInPress();
                    }}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </Animated.View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Link href="/sign-up">
                    <Text style={styles.signUpText}>Sign up</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    appTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    caption: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    form: {
        width: '100%',
    },
    input: {
        width: '100%',
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
    signUpText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#007bff',
        marginLeft: 5,
    },
});
