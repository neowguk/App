import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Hello, React Native!</Text>
        <Text style={styles.text}>버튼을 눌러보세요: {count}</Text>
        <Button
          title="눌러보세요!"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#282c34',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    color: '#61dafb',
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 12,
  },
});
