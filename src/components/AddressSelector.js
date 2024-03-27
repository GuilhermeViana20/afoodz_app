import React from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const AddressSelector = ({ addresses, selectedAddress, onAddressChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione seu endereço:</Text>
      <Picker
        selectedValue={selectedAddress}
        onValueChange={(itemValue, itemIndex) => onAddressChange(itemValue)}
      >
        {addresses.map((address, index) => (
          <Picker.Item key={index} label={address.label} value={address.value} />
        ))}
      </Picker>
      <Text style={styles.selectedAddress}>
        Endereço selecionado: {selectedAddress}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  selectedAddress: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default AddressSelector;