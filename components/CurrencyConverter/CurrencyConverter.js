import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Switch,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import { fetchExchangeRates } from '../../services/currencyService';
import { calculateConversion, prepareCurrencyList } from '../../utils/currencyUtils';
import { getStyles, lightColors, darkColors } from './CurrencyConverter.styles';
import { CurrencyDropdown } from './CurrencyDropdown';


const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1');
  const [rates, setRates] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [converted, setConverted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropdownData, setDropdownData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const styles = getStyles(isDarkMode);
  const colors = isDarkMode ? darkColors : lightColors;

  useEffect(() => {
    const loadRates = async () => {
      try {
        const data = await fetchExchangeRates();
        const currencyRates = data.rates;
        const currencies = prepareCurrencyList(currencyRates);
        
        setRates(currencyRates);
        setDropdownData(currencies);
        setLoading(false);
        
        const initialConversion = calculateConversion(amount, currencyRates, selectedCurrency);
        setConverted(initialConversion);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    loadRates();
  }, []);

  useEffect(() => {
    if (rates && Object.keys(rates).length > 0) {
      const newConverted = calculateConversion(amount, rates, selectedCurrency);
      setConverted(newConverted);
    }
  }, [amount, selectedCurrency, rates]);

  const handleAmountChange = (text) => {
    if (/^[0-9]*\.?[0-9]*$/.test(text)) {
      setAmount(text);
    }
  };

  const handleCurrencySelect = (currency) => {
    if (currency === true) {
      setShowDropdown(true);
    } else {
      setSelectedCurrency(currency);
      setShowDropdown(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.result} />
      </View>
    );
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

      <View style={styles.logoContainer}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: colors.switchTrack, true: colors.switchTrack }}
            thumbColor={colors.switchThumb}
          />
        </View>
      </View>

      <Text style={styles.title}>Currency Converter</Text>
       

      <Text style={styles.label}>Amount in EUR</Text>
      <TextInput
        keyboardType="numeric"
        value={amount}
        onChangeText={handleAmountChange}
        style={styles.input}
        placeholder="Enter amount"
        placeholderTextColor={colors.border}
      />

      <Text style={styles.label}>Convert to</Text>
      
      <TouchableOpacity 
        style={styles.dropdown}
        onPress={() => handleCurrencySelect(true)}
      >
        <Text style={styles.dropdownText}>{selectedCurrency}</Text>
      </TouchableOpacity>

      <CurrencyDropdown
        selectedCurrency={selectedCurrency}
        currencies={dropdownData}
        visible={showDropdown}
        onSelect={handleCurrencySelect}
        onClose={() => setShowDropdown(false)}
        isDarkMode={isDarkMode}
      />

      {converted !== null && (
        <Text style={styles.result}>
          {amount} EUR = {converted} {selectedCurrency}
        </Text>
      )}
    </View>
  );
};

export default CurrencyConverter;