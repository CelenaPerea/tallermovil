// components/StatusBarExample.js
import React from 'react';
import { View, StatusBar, Text } from 'react-native';

function StatusBarEjemplo() {
    return (
        <View>
            <StatusBar barStyle="dark-content" />
            <Text>El status bar como tal es la informacion del celular (bateria, hora, etc..)</Text>
            <Text>La opciones que tenemos con eso es light o dark mode</Text>
        </View>
    );
};

export default StatusBarEjemplo;
