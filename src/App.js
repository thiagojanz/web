import React from 'react';
import Header from './components/Header';
import LinhaHorizontal from './components/LinhaHorizontal';
import Marcas from './components/BarraDeMarcas';
import { View, Button } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Certifique-se de que este arquivo existe

function App() {
  return (
    <div>
      <div className="container">
        <Header/>
      </div>
      <div className='LinhaHorizontal_front'>        
        <LinhaHorizontal />        
      </div>
      <div className='container mt-2'>        
        <Marcas />        
      </div>
      <div className="container">
        <h1 className="display-4">Comércio de Bebidas</h1>
        <p className="lead">
        Bebilogo - Comércio de Bebidas | Belém/PA - Bebidas, Cervejas, Destilados, Energéticos, Refrigerantes, Petiscos, Tira Gosto.
        </p>
        <View style={{ marginBottom: 20 }}>
          <Button
            title="Call to Action"
            onPress={() => alert('Button pressed!')}
            className="btn btn-primary btn-lg"
          />
        </View>      
      </div>
    </div>
  );
}

export default App;