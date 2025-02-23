import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

function TextInputEjemplo() {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                placeholder="Escribe algo..."
                value={text}
                onChangeText={setText}
                style={styles.textInput}
            />
        </View>
    );
};

export default TextInputEjemplo;

const styles = {
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
}