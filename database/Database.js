import AsyncStorage from '@react-native-async-storage/async-storage';

// salva estudo
export async function addStudy(study) {
  try {
    const data = await AsyncStorage.getItem('estudos');
    const current = data ? JSON.parse(data) : [];

    const newStudy = {
      id: Date.now(),
      ...study
    };///

    const updated = [...current, newStudy];
    await AsyncStorage.setItem('estudos', JSON.stringify(updated));
  } catch (error) {
    console.log("Erro ao salvar estudo", error);
  }
}

// lista estudos
export async function getStudies() {
  try {
    const data = await AsyncStorage.getItem('estudos');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Erro ao ler estudos", error);
    return [];
  }
}

// limpa tudo (opcional)
export async function clearStudies() {
  try {
    await AsyncStorage.removeItem('estudos');
  } catch (error) {
    console.log("Erro ao limpar", error);
  }
}
