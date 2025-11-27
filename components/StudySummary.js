import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getStudies } from '../database/Database';

export default function StudySummary() {
  const [total, setTotal] = useState(0);

  async function calcular() {
    const lista = await getStudies();
    const soma = lista.reduce((acc, item) => acc + item.tempo, 0);
    setTotal(soma);
  }

  useEffect(() => {
    calcular();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumo de Horas Estudadas</Text>

      <Text style={styles.texto}>
        ⏱️ Total estudado: <Text style={{ fontWeight: 'bold' }}>{total} minutos</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20 },
  texto: { fontSize: 20 }
});
