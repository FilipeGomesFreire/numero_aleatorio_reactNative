import { Image, StyleSheet, Platform, View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Appearance } from 'react-native';
import { Alert } from "react-native";
import FastImage from "react-native-fast-image";

export default function HomeScreen() {
  Appearance.setColorScheme('light'); // Força o tema claro
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const generateRandomNumber = () => {
    if (min < max) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(random);
    } else {
      Alert.alert("Erro", "Eita BURRO!, onde já se viu "+max+" ser maior que "+min+" ?");
    }
  };

  return (
    
    <ParallaxScrollView
    
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        


<Image
  source={{ uri: "https://cdna.artstation.com/p/assets/images/images/019/880/600/original/nirah-______-animationfinishprobably.gif" }}
  style={styles.reactLogo}
/>


//         <FastImage 
//   source={require('@/assets/images/animation.gif')} 
//   style={styles.reactLogo}
// />


      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Gerador de Números Aleatórios</ThemedText>
      </ThemedView>
      <ThemedView style={styles.inputContainer}>
        <Text>Digite o intervalo de números:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Mínimo"
          onChangeText={(text) => setMin(Number(text) || 0)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Máximo"
          onChangeText={(text) => setMax(Number(text) || 100)}
        />
        <Button title="Gerar Número" onPress={generateRandomNumber} />
        {randomNumber !== null && (
          <ThemedText type="title" style={styles.result}>
            Número: {randomNumber}
          </ThemedText>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  inputContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 100,
    padding: 5,
    textAlign: 'center',
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});