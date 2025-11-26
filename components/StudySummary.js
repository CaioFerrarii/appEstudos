import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getDB } from '../database/Database';

export default function StudySummary() {
  const [total, setTotal] = useState(0);
  const db = getDB();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT SUM(tempo) as totalHoras FROM estudos",
        [],
        (_, resultado) => {
          setTotal(resultado.rows._array[0].totalHoras || 0);
        }
      );
    });
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
