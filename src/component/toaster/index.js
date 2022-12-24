import React from 'react';
import { View, Text, Modal, StyleSheet } from "react-native";

export const Toast = ({ message, shown }) => {
  return (
    <Modal
      style={styles.modal}
      transparent={true}
      visible={shown}
      animationType="fade"
    >
      <View style={styles.container}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "86%",
    width: "auto",
    height: 35,
    borderRadius: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  text: {
    color: "#fff",
  },
});
