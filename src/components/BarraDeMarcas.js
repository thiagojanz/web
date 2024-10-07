import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';

const marcas = [
    { id: 1, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 2, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 3, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 4, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 5, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 6, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 7, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 8, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 9, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 10, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 11, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 12, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 13, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 14, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 15, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 16, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 17, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 18, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 19, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
    { id: 20, image: require('../img/marcas/marca1.png'), link: 'https://www.marca1.com' },
  // Adicione mais marcas conforme necessário
];

const BarraDeMarcas = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef(null); // Referência para o ScrollView
  const [imageWidth, setImageWidth] = useState(100); // Largura padrão da imagem (ajustável)

  const handleNext = () => {
    if (currentIndex < marcas.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);

      // Verifica se a referência do ScrollView está definida antes de usar scrollTo
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: newIndex * imageWidth, animated: true });
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: newIndex * imageWidth, animated: true });
      }
    }
  };

  const handleImageClick = (link) => {
    // Abre o link da marca clicada
    Linking.openURL(link);
  };

  const handleImageLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setImageWidth(width + 20); // Ajusta a largura com margem
  };

  return (
    <View style={styles.container}>
      {/* Botão Esquerdo */}
      <TouchableOpacity onPress={handlePrev} style={styles.button}>
        <Image source={require('../img/left-arrow.png')} style={styles.arrow} />
      </TouchableOpacity>

      {/* Área de Imagens de Marcas */}
      <ScrollView
        horizontal
        ref={scrollViewRef} // Define a referência ao ScrollView
        showsHorizontalScrollIndicator={false} // Remove a barra de rolagem visível
        scrollEnabled={false} // Desabilita a rolagem manual
      >
        {marcas.map((marca) => (
          <TouchableOpacity key={marca.id} onPress={() => handleImageClick(marca.link)}>
            <Image 
              source={marca.image} 
              style={styles.marcaImage}
              onLayout={handleImageLayout} // Pega a largura da imagem dinamicamente
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botão Direito */}
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Image source={require('../img/right-arrow.png')} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
  arrow: {
    width: 30,
    height: 30,
  },
  marcaImage: {
    width: 100, // Largura padrão da imagem
    height: 100,
    marginHorizontal: 10, // Margem ao redor da imagem
  },
});

export default BarraDeMarcas;
