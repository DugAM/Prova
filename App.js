import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});

import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';

const App = () => {

  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');

  const [area, setArea] = useState(null);


  const calcularArea = () => {
    const baseNumber = parseFloat(base);
    const alturaNumber = parseFloat(altura);

    if (!isNaN(baseNumber) && !isNaN(alturaNumber)) {
      const areaCalculada = (baseNumber * alturaNumber) / 2;
      setArea(areaCalculada.toFixed(2));
    } else {
      setArea(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Base:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={base}
        onChangeText={text => setBase(text)}
      />
      <Text style={styles.label}>Altura:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={altura}
        onChangeText={text => setAltura(text)}
      />
      <Button title="Calcular Área" onPress={calcularArea} />
      {area !== null && (
        <Text style={styles.resultado}>
          Área do triângulo: {area}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
