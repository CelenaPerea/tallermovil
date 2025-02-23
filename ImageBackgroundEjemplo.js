import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

function ImageBackgroundEjemplo() {
    return (
        <View>
            <ImageBackground
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.imageBackground}
            >
                <Text style={styles.text}>Imagen de fondo</Text>
            </ImageBackground>
        </View>
    );
};

export default ImageBackgroundEjemplo;

const styles = {
    imageBackground: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
}
    