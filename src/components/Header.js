// src/components/Header.js
import React from 'react';
import { FaBars, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import './Header.css'; // Adicione um arquivo CSS para estilos adicionais
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const abrirmenuLeft = () => {
    // Função para abrir o menu à esquerda
    console.log("Menu esquerdo aberto");
  };

  const abrirmenuRight = () => {
    // Função para abrir o menu à direita
    console.log("Menu direito aberto");
  };

  return (
    <div className="header">
      <div className="header_middle">
        <div className="container">
          <div className="row align-items-center">
            {/* Mobile Menu Button */}
            <div className="col-2 d-block d-lg-none">
              <button className="canvas_open btn" onClick={abrirmenuLeft} style={{ border: 'none' }}>
                <FaBars />
              </button>
            </div>

            {/* Mobile Logo */}
            <div className="col-8 d-block d-lg-none text-center">
              <div className="logo">
                <a href="https://bebilogo.com.br/shop">
                  <img
                    src="https://bebilogo.com.br/assets2/img/logo/logomarca_bebilogo_2.png"
                    alt="Bebilogo"
                    style={{ maxWidth: '210px' }}
                  />
                </a>
              </div>
            </div>

            {/* Mobile Cart Icon */}
            <div className="col-2 d-block d-lg-none text-end">
              <button className="mini_cart_wrapper btn" onClick={abrirmenuRight} style={{ border: 'none' }}>
                <FaShoppingBasket />
                <span className="cart_quantity">0</span>
              </button>
            </div>

            {/* Desktop Logo */}
            <div className="col-lg-3 col-md-3 d-none d-lg-block">
              <div className="logo">
                <a href="https://bebilogo.com.br/shop">
                  <img
                    src="https://bebilogo.com.br/assets2/img/logo/logomarca_bebilogo_2.png"
                    alt="Bebilogo"
                    style={{ maxWidth: '228px' }}
                  />
                </a>
              </div>
            </div>

            {/* Desktop Search and Cart */}
            <div className="col-lg-9 col-md-9 d-none d-lg-block">
              <div className="middel_right d-flex justify-content-end">
                {/* Search Box */}
                <div className="search-container me-3">
                  <form className='d-flex' role="search" action="https://bebilogo.com.br/pesquisar">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="O que está procurando?" required/>
                      <button type="submit" className="btn btn-primary">
                        <FaSearch />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Cart */}
                <div className="mini_cart_wrapper">
                  <button className="btn" onClick={abrirmenuRight}>
                    <FaShoppingBasket />
                    <span className="cart_quantity">0</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;