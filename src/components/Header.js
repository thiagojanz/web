// src/components/Header.js
import React from 'react';
import { FaBars, FaShoppingBasket, FaSearch } from 'react-icons/fa';
import './Header.css'; // Adicione um arquivo CSS para estilos adicionais

const Header = () => {
  return (
    <div className="header container">
      <div className="header_middle container">
        <div className="container">
          <div className="row align-items-center container">
            {/* Mobile Menu Button */}
            <div className="col-2 d-block d-lg-none">
                <FaBars />
            </div>           

            {/* Desktop Logo */}
            <div className="col-lg-4 col-md-3 d-none d-lg-block">
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
            <div className="col-lg-8 col-md-9 d-none d-lg-block">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;