import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getStudies, clearStudies } from '../database/Database';

export default function StudyList() {
  const [estudos, setEstudos] = useState([]);

  async function carregar() {
    const lista = await getStudies();
    setEstudos(lista);
  }

  async function excluir(id) {
    const lista = await getStudies();
    const novaLista = lista.filter(item => item.id !== id);
    await AsyncStorage.setItem('estudos', JSON.stringify(novaLista));
    carregar();
  }

  useEffect(() => {
    carregar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Estudos</Text>

      <FlatList
        data={estudos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>📘 {item.materia}</Text>
            <Text>Conteúdo: {item.conteudo}</Text>
            <Text>Data: {item.dataEstudo}</Text>
            <Text>Tempo: {item.tempo} min</Text>
            <Text>Nível: {item.nivel}</Text>

            <Button title="Excluir" onPress={() => excluir(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  card: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  }
});
