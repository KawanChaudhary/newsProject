import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

interface ThemeModalProps {
  isVisible: boolean;
  onClose: () => void;
  onChangeTheme: (theme: string) => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({ isVisible, onClose, onChangeTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('blue');

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
    onChangeTheme(theme);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Choose Theme</Text>
          <TouchableOpacity
            style={[
              styles.themeOption,
              selectedTheme === 'blue' && styles.selectedOption,
            ]}
            onPress={() => handleThemeChange('blue')}
          >
            <Text style={styles.optionText}>Blue (Default)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.themeOption,
              selectedTheme === 'orange' && styles.selectedOption,
            ]}
            onPress={() => handleThemeChange('orange')}
          >
            <Text style={styles.optionText}>Orange</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.themeOption,
              selectedTheme === 'darkgreen' && styles.selectedOption,
            ]}
            onPress={() => handleThemeChange('darkgreen')}
          >
            <Text style={styles.optionText}>Dark Green</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  themeOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThemeModal;
