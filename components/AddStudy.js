import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { addStudy } from '../database/Database';

export default function AddStudy({ navigation }) {
  const [materia, setMateria] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [dataEstudo, setDataEstudo] = useState('');
  const [tempo, setTempo] = useState('');
  const [nivel, setNivel] = useState('');

  async function salvar() {
    if (!materia || !conteudo || !dataEstudo || !tempo || !nivel) {
      alert("Preencha todos os campos!");
      return;
    }

    const estudo = {
      materia: String(materia),
      conteudo: String(conteudo),
      dataEstudo: String(dataEstudo),
      tempo: Number(tempo),
      nivel: String(nivel)
    };

    await addStudy(estudo);

    alert("Estudo salvo com sucesso!");
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Estudo</Text>

      <TextInput placeholder="Matéria" style={styles.input} onChangeText={setMateria} />
      <TextInput placeholder="Conteúdo" style={styles.input} onChangeText={setConteudo} />
      <TextInput placeholder="Data (ex: 10/11/2025)" style={styles.input} onChangeText={setDataEstudo} />
      <TextInput placeholder="Tempo (minutos)" style={styles.input} keyboardType="numeric" onChangeText={setTempo} />
      <TextInput placeholder="Nível (Fácil/Médio/Difícil)" style={styles.input} onChangeText={setNivel} />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  }
});
