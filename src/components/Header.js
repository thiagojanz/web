import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.css'; // Certifique-se de que este arquivo existe
import logo from '../img/logomarca_app_white.png';

const Header = () => {
  return (
    <div className="container">
        <div className="row align-items-center">
          {/* Desktop Header */}
          <div className="col-lg-4 col-md-4 d-none d-lg-block">
            <div className="d-flex">
              <div className="logomarca mt-2">
                <a href="/" className="d-flex mb-3">
                  <img src={logo} alt="Logo" className="logo" />
                </a>
              </div>
            </div>
          </div>
          {/* Mobile Header */}
          <div className="col-12 d-block d-lg-none">
            <div className="d-flex justify-content-center">
              <div className="logomarca">
                <a href="/" className="d-flex mb-3">
                  <img src={logo} alt="Logo" className="logo" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form className='d-flex' role="search" action="https://bebilogo.com.br/pesquisar">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="O que está procurando?" required />
                <button type="submit" className="btn btn-primary">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

      </div>
    </div>
  );
};

export default Header;
