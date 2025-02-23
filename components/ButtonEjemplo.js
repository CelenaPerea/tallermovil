import React from 'react';
import { View, Button, Alert } from 'react-native';

function ButtonEjemplo()  {
    return (
        <View>
            <Button
                title="Presióname"
                onPress={() => Alert.alert('¡Botón presionado!')}
            />
        </View>
    );
};

export default ButtonEjemplo;
