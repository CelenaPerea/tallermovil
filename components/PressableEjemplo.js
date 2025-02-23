// components/PressableExample.js
import React from 'react';
import { View, Pressable, Text } from 'react-native';

function PressableEjemplo() {
    return (
        <View>
            <Pressable
                onPress={() => console.log('Pressable presionado')}
                style={({ pressed }) => [
                    styles.pressable,
                    pressed && styles.pressablePressed
                ]}
            >
                <Text>Presiona aquí</Text>
            </Pressable>
        </View>
    );
};

export default PressableEjemplo;

const styles = {
    pressable: {
        padding: 10,
        margin: 10,
    },
    pressablePressed: {
        backgroundColor: 'lightgray',
    },
}
