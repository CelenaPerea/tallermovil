import React from 'react';
import { View, Image } from 'react-native';

function ImageEjemplo(){
    return (
        <View>
            <Image
                source={{ uri: 'https://picsum.photos/400/400' }}
                style={styles.image}
            />
        </View>
    );
};

export default ImageEjemplo;

const styles = {
    image: {
        width: 300,
        height: 300,
    },
}