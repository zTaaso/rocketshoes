import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Cart() {
  return (
    <View style={styles.sla}>
      <Text>Carrinho :D</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sla: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
