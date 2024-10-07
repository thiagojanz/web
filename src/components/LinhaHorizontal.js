import React from 'react';
import './LinhaHorizontal.css'; // Certifique-se de que este arquivo existe
import Dropdown from './Dropdown'; // Importa o Dropdown
import { FaShoppingCart } from 'react-icons/fa';

const LinhaHorizontal = () => {

  return (
    <div className='col-lg-12 d-none d-lg-block'>      
      <div className="col-lg-12 container d-flex align-items-center flex-wrap">
        <div className="col-lg-9"><Dropdown/></div>
        <div className="col-lg-3 textright">
            <a href="https://bebilogo.com.br/orcamento" class="text-black"><FaShoppingCart /></a>
        </div>
      </div>
    </div>      
  );
};

export default LinhaHorizontal;
