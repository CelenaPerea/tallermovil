// components/SwitchExample.js
import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

function SwitchEjemplo() {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <View>
            <Switch
                value={isEnabled}
                onValueChange={setIsEnabled}
            />
            <Text>{isEnabled ? 'Encendido' : 'Apagado'}</Text>
        </View>
    );
};

export default SwitchEjemplo;

