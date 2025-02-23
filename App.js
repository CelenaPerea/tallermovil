import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import ListaContador from './components/ListaContador';
import Greeting from './components/Greeting';
import UserDetails from './components/UserDetails';
import Task from './components/Task';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';

export default function App() {

  const tareas = [
    { title: "Hacer la compra", completed: true },
    { title: "Estudiar React Native", completed: false },
    { title: "Ejercicio diario", completed: true },
  ];
   
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Greeting name="Brandon Echeverry" />
          <Greeting name="Celena Mosquera" />
          <Greeting name="Yorleisy Ramos" />

          <UserDetails nombre="Celena" edad={22} ocupacion="Estudiante" />
          <UserDetails nombre="Brandon" edad={25} ocupacion="Developer" />
          <UserDetails nombre="Yorleisy" edad={21} ocupacion="Estudiante" />

          <ToggleText />
          <DynamicForm />
          <ClickCounter />
          <ListaContador />
        </ScrollView> 
          <FlatList
            nestedScrollEnabled={true}
            style={styles.flatList}
            data={tareas}
            renderItem={({ item }) => <Task task={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 2,
    alignItems: "center",
    paddingVertical: 30,
  },
});
