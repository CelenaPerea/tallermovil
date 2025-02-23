import { View, Text, Pressable, StyleSheet, Platform} from "react-native";

function ComponenteGridTile({ title, color, onPress }) {
    return (
    <View style={styles.gridItem}>
        <Pressable 
        style={({pressed}) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        >
            <View style={[styles.innerContainer, { backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>);
}



export default ComponenteGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
       opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,

    }
})