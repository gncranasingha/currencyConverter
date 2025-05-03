import { StyleSheet } from 'react-native';

export const lightColors = {
  background: '#eafafa',
  text: '#333333',
  inputBg: '#f5f5f5',
  border: '#cccccc',
  result: '#4caf50',
  error: '#d32f2f',
  dropdownBg: '#ffffff',
  switchTrack: '#767577',
  switchThumb: '#f4f3f4',
};

export const darkColors = {
  background: '#121212',
  text: '#f5f5f5',
  inputBg: '#1e1e1e',
  border: '#333333',
  result: '#4caf50',
  error: '#f44336',
  dropdownBg: '#1e1e1e',
  switchTrack: '#4caf50',
  switchThumb: '#121212',
};

export const getStyles = (isDarkMode) => {
  const colors = isDarkMode ? darkColors : lightColors;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom:20,
      color: colors.result,
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    switchLabel: {
      marginRight: 8,
      color: colors.text,
      fontSize: 16,
    },
    label: {
      fontSize: 16,
      marginVertical: 8,
      color: colors.text,
      fontWeight: '600',
    },
    input: {
      height: 50,
      backgroundColor: colors.inputBg,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: 16,
      color: colors.text,
    },
    dropdown: {
      height: 50,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      justifyContent: 'center',
      marginBottom: 20,
      backgroundColor: colors.inputBg,
    },
    dropdownText: {
      fontSize: 16,
      color: colors.text,
    },
    result: {
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 20,
      textAlign: 'center',
      color: colors.result,
    },
    error: {
      fontSize: 16,
      color: colors.error,
      textAlign: 'center',
      padding: 20,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: colors.dropdownBg,
      marginHorizontal: 20,
      borderRadius: 10,
      maxHeight: '60%',
    },
    dropdownItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    dropdownItemText: {
      fontSize: 16,
      color: colors.text,
    },
  });
};