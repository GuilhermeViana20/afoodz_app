import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import AddressSelector from '../components/AddressSelector';

const Home = () => {
  const [addresses] = useState([
    { label: 'Endereço 1', value: 'address1' },
    { label: 'Endereço 2', value: 'address2' },
    { label: 'Endereço 3', value: 'address3' },
  ]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].value);

  const handleAddressChange = (address) => {
    setSelectedAddress(address);
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <AddressSelector
          addresses={addresses}
          selectedAddress={selectedAddress}
          onAddressChange={handleAddressChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    backgroundColor: colors.bg_primary,
  }
});

export default Home;