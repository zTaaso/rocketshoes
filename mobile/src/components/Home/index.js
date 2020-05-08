import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.sla}>
      <Text>Vai tomar no seu cu. </Text>
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
