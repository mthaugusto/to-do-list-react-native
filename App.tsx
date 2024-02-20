import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Tarefas = ({ item, index, onDelete }) => {
  return (
    <View style={{ marginBottom: 10, backgroundColor: 'white', padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => onDelete(index)} style={styles.addBtn}>
        <AntDesign name="delete" size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [tarefas, setTarefas] = useState(['Teste']);
  const [tarefa, setTarefa] = useState('');

  function adicionarTarefa() {
    if (tarefa === '') {
      alert('Digite uma tarefa');
      return;
    }

    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }

  function deletarTarefa(index) {
    const newTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(newTarefas);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas do dia</Text>

      <FlatList
        data={tarefas}
        renderItem={({ item, index }) => (
          <Tarefas item={item} index={index} onDelete={deletarTarefa} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={tarefa}
          onChangeText={(texto) => setTarefa(texto)}
        />
        <TouchableOpacity onPress={() => adicionarTarefa()} style={styles.addBtn}>
          <Ionicons name="add" size={30} color="#C0C0C0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 90,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30
  },
  input: {
    height: 40,
    borderRadius: 15,
    borderColor: 'gray',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%'
  },
  addBtn: {
    marginLeft: 10,
    marginTop: 4,
    borderRadius: 50,
    padding: 5,
    backgroundColor: 'white',
  }
});


export default App; 