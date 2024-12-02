import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

const skinImages = {
    oily: [
        {
            uri: 'https://glossypolish.com/wp-content/uploads/2016/06/Plum-Goodness-Green-Tea-Alcohol-Free-Toner-.jpg',
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
        
    ],
    sensitive: [
        {
            uri: 'https://m.media-amazon.com/images/I/51urZJ--MsL._SL1200_.jpg',
            title: 'Derma Face Serum',
            description: 'Suitable for all skin types. A skincare product designed to deliver concentrated active ingredients deep into the skin.',
        },
    ],
};

const App = () => {
    const [inputText, setInputText] = useState('');
    const [images, setImages] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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
                <View style={styles.searchContainer}>
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
                </View>
                {errorMessage ? (
                    <Text style={styles.errorText}>{errorMessage}</Text>
                ) : (
                    <ScrollView contentContainerStyle={styles.scrollView}>
                        {images.map((item, index) => (
                            <View key={index} style={styles.imageContainer}>
                                <Image source={{ uri: item.uri }} style={styles.image} />
                                <Text style={styles.imageTitle}>{item.title}</Text>
                                <Text style={styles.imageDescription}>{item.description}</Text>
                            </View>
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
        backgroundColor: 'pink',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width : 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 6,
        paddingHorizontal: 0,
    },
    input: {
        flex: 1,
        padding: 15,
        fontSize: 16,
        borderRadius: 30,
        backgroundColor: '#e9ecef',
        marginRight: 10,
        fontFamily: 'Arial',
    },
    button: {
        backgroundColor: '#e9967a',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    clearButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    clearButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
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

export default App;