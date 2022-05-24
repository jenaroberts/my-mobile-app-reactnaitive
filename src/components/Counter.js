import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}> You clicked me {count} times.</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    width: "80%",
    margin: 14,
    padding: 14,
    backgroundColor: "white",
    borderRadius: 11,
    borderStyle: "dotted",
    borderWidth: 4,
    borderColor: "black",
  },
  counterText: {
    fontSize: 30,
    textAlign: "center",
  },
});
