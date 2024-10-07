import React, { useState } from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { FaBars } from 'react-icons/fa';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Você selecionou: ${option}`);
    setIsOpen(false);
  };

  return (
    <View style={styles.dropdown}>
      <Pressable onPress={toggleDropdown} style={styles.dropdownToggle}  className="d-flex align-items-center">
        <View style={styles.toggleContainer}>
          <FaBars style={styles.icon} />
          <Text style={styles.toggleText}>Categorias</Text>
        </View>
      </Pressable>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          <Pressable onPress={() => handleOptionClick('Categoria 1')} style={styles.menuItem}>
            <Text>Categoria 1</Text>
          </Pressable>
          <Pressable onPress={() => handleOptionClick('Categoria 2')} style={styles.menuItem}>
            <Text>Categoria 2</Text>
          </Pressable>
          <Pressable onPress={() => handleOptionClick('Categoria 3')} style={styles.menuItem}>
            <Text>Categoria 3</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    width: '180px',
  },
  dropdownToggle: {
    backgroundColor: '#f5f5f54d',
    padding: 10,
  },
  toggleContainer: {
    flexDirection: 'row',   // Itens alinhados na mesma linha
    alignItems: 'center',   // Alinhar os itens verticalmente no centro
  },
  icon: {
    marginRight: 8,         // Espaçamento entre o ícone e o texto
    color: 'black',         // Cor do ícone (branco para combinar com o botão)
  },
  toggleText: {
    color: 'black',         // Cor do texto
    fontSize: 16,
  },
  dropdownMenu: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    width: '180px',
  },
  menuItem: {
    padding: 10,
  },
});

export default Dropdown;
