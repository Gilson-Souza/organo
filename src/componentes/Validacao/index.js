import './Validacao.css'
import React from 'react';


const Validacao = () => {
    for (const rule of rules) {
        const errorMessage = rule.validate(value);
        if (errorMessage) {
          return <span className="error">{errorMessage}</span>;
        }
      }
    return null;
};

export default Validacao;

