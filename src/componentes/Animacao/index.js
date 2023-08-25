import './Animacao.css'
import React, { useState } from 'react';

const Animacao = ({ gifPath}) => {
  const [showGIF] = useState(true);

  return (
    <div className='animacao'>
      {showGIF && <img src={gifPath} alt="GIF" />}
    </div>
  );

};


export default Animacao;