// src/App.js
import React from 'react';
import MyButton from './components/MyButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5">Bem-vindo ao Meu App</h1>
      <MyButton title="Clique aqui!" onPress={() => alert('Botão clicado!')} />
    </div>
  );
}

export default App;

