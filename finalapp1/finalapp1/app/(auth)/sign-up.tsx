import * as React from 'react';
import { TextInput, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
} from 'react-native-reanimated';

export default function SignUpScreen() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    // Animation shared values
    const titleOpacity = useSharedValue(0);
    const formTranslation = useSharedValue(50);

    React.useEffect(() => {
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

    const onSignUpPress = async () => {
        if (!isLoaded || loading) {
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            await signUp.create({ emailAddress, password });
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
            setPendingVerification(true);
        } catch (err: any) {
            setErrorMessage(err.message || 'An error occurred during sign up.');
            console.error(JSON.stringify(err, null, 2));
        } finally {
            setLoading(false);
        }
    };

    const onPressVerify = async () => {
        if (!isLoaded || loading) {
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({ code });

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId });
                router.replace('/');
            } else {
                setErrorMessage('Verification failed. Please check your code.');
                console.error(JSON.stringify(completeSignUp, null, 2));
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'An error occurred during verification.');
            console.error(JSON.stringify(err, null, 2));
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Animated Title */}
            <Animated.Text style={[styles.title, titleStyle]}>
                {pendingVerification ? 'Verify Your Email' : 'Create an Account'}
            </Animated.Text>
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            {/* Animated Form */}
            <Animated.View style={[styles.formContainer, formStyle]}>
                {!pendingVerification && (
                    <>
                        <TextInput
                            autoCapitalize="none"
                            value={emailAddress}
                            placeholder="Email Address"
                            onChangeText={setEmailAddress}
                            style={styles.input}
                            placeholderTextColor="#aaa"
                        />
                        <TextInput
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            style={styles.input}
                            placeholderTextColor="#aaa"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onSignUpPress}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
                {pendingVerification && (
                    <>
                        <TextInput
                            value={code}
                            placeholder="Verification Code"
                            onChangeText={setCode}
                            style={styles.input}
                            placeholderTextColor="#aaa"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPressVerify}
                            disabled={loading}
                        >
                            <Text style={styles.buttonText}>
                                {loading ? 'Verifying...' : 'Verify Email'}
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </Animated.View>
            {loading && <ActivityIndicator size="large" color="#007BFF" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    error: {
        color: 'red',
        marginBottom: 15,
        textAlign: 'center',
    },
    formContainer: {
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
