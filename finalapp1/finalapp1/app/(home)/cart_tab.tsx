import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Animated,
} from 'react-native';

const skinImages = {
    oily: [
        {
            uri: 'https://i0.wp.com/www.highongloss.com/wp-content/uploads/2016/10/plum-green-tea-non-alcoholic-toner.jpg?fit=911%2C640&ssl=1',
            title: 'Plum Green Tea Toner',
            description: 'suitable for oily skin. Helps control excess oil production, reducing shine and preventing breakouts. Provides hydration without feeling heavy or greasy, leaving the skin feeling fresh and revitalized.',
        },

        {
            uri: 'https://kohimatoday.com/wp-content/uploads/2024/05/21c27046b9f42442adead655852e68b6.png',
            title: 'Mamaearth Face Wash',
            description: 'Suitable for oily skin. This face wash is designed to brighten the skin and reduce tan. It helps cleanse impurities while providing a natural glow.',
        },

    ],
    dry: [
        {
            uri: 'https://www.byrdie.com/thmb/ugDnv7uG7Nip4FX9w_9scCG4ZQg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HERO-59e8ed41efd24d66b26ca756c6f3076e.jpg',
            title: 'CeraVe Moisturizer',
            description: 'Suitable for Dry Skin. Its gentle, non-irritating formula is free of fragrances, making it suitable for those with sensitivity concerns.',
        },

        {
            uri: 'https://dsom-imager-prod.shipt.com/17425434-27/1-5cfe29523f036b01ba0d128fb969a1cd.jpeg',
            title: 'VaniCream Skin Care Set',
            description: 'Suitable for Dry skin. Wide range of products that are focused to deliver smooth skin and gives protection towards UV rays.',
        },

        {
            uri: 'https://m.media-amazon.com/images/I/71Z+wNMRYYL._SL1500_.jpg',
            title: 'Neutrogena HydroBoost Hyaluronic Acid Serum',
            description: 'Suitable for Dry skin. The serum has a lightweight, gel-like texture that absorbs quickly into the skin without leaving a greasy residue, making it suitable for all skin types, including oily and combination skin',
        },
    ],
    combination: [
        {
            uri: 'https://images-na.ssl-images-amazon.com/images/I/81CeRnqx6TL._SL1500_.jpg',
            title: 'Insta Natural Toner',
            description: 'Suitable for all skin types. A skincare product designed to refresh, tone, and brighten the skin. It often contains Vitamin C as the key active ingredient, known for its antioxidant properties, which help protect the skin from environmental damage and promote an even skin tone.',
        },
        {
            uri: 'https://m.media-amazon.com/images/I/71WV6XUrZpL._SX522_.jpg',
            title: ' belif ',
            description: ' A cushiony, whipped textured moisturizer with a new and improved formula clinically tested to deliver up to 48 hours of explosive moisture and to recharge the moisture barrier.  Provides long-lasting moisturization to dry skin and reformulated with two Napiers Formulas and better-for-you ingredients Peptide, Ceramide and Squalane to help improve the skin barrier and skin elasticity',
 
        },
        {
            uri: 'https://m.media-amazon.com/images/I/71x04TraROL._SX466_.jpg',
            title: ' Lancer ',
            description: 'With powerful formulas used by stars like Candace Cameron Bure and Kim Kardashian, this kit includes The Lancer Method, a 3-step skincare routine that works to promote skin regeneration for a youthful appearance.',
        },
    ],
    sensitive: [
        {
            uri: 'https://m.media-amazon.com/images/I/51urZJ--MsL._SL1200_.jpg',
            title: 'Derma Face Serum',
            description: 'Suitable for all skin types. A skincare product designed to deliver concentrated active ingredients deep into the skin.',
        },
        {
            uri: 'https://m.media-amazon.com/images/I/81QXJS-DdFL._SL1500_.jpg',
            title: 'Snail Mucin',
            description: 'This skin care set includes snail mucin toner,serum,eye cream, moisturizer,all working together to promote hydration,soothe dehydrated skin,repair damage,Enjoy a clear,smooth skin with snail mucin sourced from Korea',
        },
        {
            uri: 'https://m.media-amazon.com/images/I/71t6IJrD-ZL._SL1500_.jpg',
            title: 'Neutrogena Collagen Bank Face Moisturizer',
            description: 'Collagen Bank Face Moisturizer with SPF 30, strengthens the collagen you have & builds the collagen you don’t for plumper skin. Anti-aging face cream improves 5 visible signs of collagen decline: radiance, texture, fine lines, firmness, & elasticity',
        },
        {
            uri: 'https://m.media-amazon.com/images/I/61j+HQLet-L._SX466_.jpg',
            title: 'RoC Retinol',
            description: "Whether you are looking for a solution for deep wrinkles, fine lines, dark circles, crow's feet, uneven skin tone or dry skin, we have an anti-aging formula that's right for you",
 
        },
    ],
};

export default function search() {
    const [inputText, setInputText] = useState('');
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current; // For fade-in animation
    const translateAnim = useRef(new Animated.Value(-50)).current; // For sliding animation

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(translateAnim, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handleSearch = () => {
        const lowerCaseInput = inputText.toLowerCase().trim();
        if (skinImages[lowerCaseInput]) {
            setImages(skinImages[lowerCaseInput]);
            setErrorMessage('');
        } else {
            setImages([]);
            setErrorMessage('No results found for the entered skin type.');
        }
        setInputText('');
    };

    const handleClear = () => {
        setInputText('');
        setImages([]);
        setErrorMessage('');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={styles.container}>
                <Animated.View
                    style={[
                        styles.searchContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ translateY: translateAnim }],
                        },
                    ]}
                >
                    <TextInput
                        placeholder="Enter skin type (oily, dry, combination, sensitive)"
                        value={inputText}
                        onChangeText={setInputText}
                        style={styles.input}
                    />
                    <TouchableOpacity onPress={handleSearch} style={styles.button}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <Text style={styles.clearButtonText}>Clear</Text>
                    </TouchableOpacity>
                </Animated.View>
                {errorMessage ? (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                ) : (
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        {images.map((item, index) => (
                            <Animated.View
                                key={index}
                                style={[
                                    styles.imageContainer,
                                    {
                                        opacity: fadeAnim,
                                        transform: [{ translateY: translateAnim }],
                                    },
                                ]}
                            >
                                <Image source={{ uri: item.uri }} style={styles.image} />
                                <Text style={styles.imageTitle}>{item.title}</Text>
                                <Text style={styles.imageDescription}>{item.description}</Text>
                            </Animated.View>
                        ))}
                    </ScrollView>
                )}
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFEBEE',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderRadius: 20,
        backgroundColor: '#F8F9FA',
        fontFamily: 'Arial',
        color: '#495057',
        borderWidth: 1,
        borderColor: '#E9ECEF',
        marginRight: 10,
    },
    button: {
        backgroundColor: '#EC407A',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    clearButton: {
        backgroundColor: '#FF6F91',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    clearButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    scrollView: {
        alignItems: 'center',
    },
    imageContainer: {
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: 380,
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#AD1457',
    },
    imageDescription: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginTop: 2,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '600',
    },
});


