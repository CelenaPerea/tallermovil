// components/ModalExample.js
import React, { useState } from 'react';
import { View, Text, Modal, Button } from 'react-native';

function ModalEjemplo(){
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Text> Nombre no es claro pero modal es el popup que sale cuando oprimen el boton. Nada mas </Text>
            <Button title="Mostrar Modal" onPress={() => setModalVisible(true)} />
            <Modal 
                style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.container}>
                    <View style={{ width: 200, height: 200, backgroundColor: 'white', padding: 20 }}>
                        <Text>Este es un modal</Text>
                        <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalEjemplo;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        padding: 20,
    },
}