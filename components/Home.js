import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Organização de Estudos</Text>

      <Button 
        title="Adicionar novo estudo" 
        onPress={() => navigation.navigate('AddStudy')} 
      />

      <Button 
        title="Lista de estudos" 
        onPress={() => navigation.navigate('StudyList')} 
      />

      <Button 
        title="Resumo de horas" 
        onPress={() => navigation.navigate('StudySummary')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, textAlign: 'center', marginBottom: 20 }
});
