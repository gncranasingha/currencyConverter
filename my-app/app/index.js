import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CurrencyConverter from '../components/CurrencyConverter';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <CurrencyConverter />
      </SafeAreaView>
    </>
  );
};

export default App;