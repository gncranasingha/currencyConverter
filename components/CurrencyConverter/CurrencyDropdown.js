
import {
  View,
  Text,
  
  TouchableOpacity,
  Modal,
  FlatList,
  
} from 'react-native';

import { getStyles } from './CurrencyConverter.styles';


 export const CurrencyDropdown = ({
  selectedCurrency,
  currencies,
  visible,
  onSelect,
  onClose,
  isDarkMode,
}) => {
 
  const styles = getStyles(isDarkMode);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FlatList
            data={currencies}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};
