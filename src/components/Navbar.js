import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image
        source={require('../../assets/food.jpg')}
        style={styles.banner}
      />

      <Image />
      <Text style={styles.title}>Meu App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "lightblue",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  banner: {
    height: 300
  }
});

export default Navbar;
