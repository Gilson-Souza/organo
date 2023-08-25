import React, { useState } from 'react';
import './CampoImagem.css';

const CampoImagem = (props) => {
  const [selectedImage, setSelectedImage] = useState(props.valor);

  const handleImageChange = (imageUrl) => {
    setSelectedImage(imageUrl === selectedImage ? null : imageUrl);
    props.aoAlterado(imageUrl === selectedImage ? null : imageUrl);
  };

  return (
    <div>
      <h2>Escolha uma imagem para a campanha</h2>
      <div className='campo-imagem'>
        {props.itens.map((imageUrl, index) => (
          <div key={index} className='campo-img'>
            <label className='campo-img'>
              <input
                type='checkbox'
                value={imageUrl}
                checked={imageUrl === selectedImage}
                onChange={() => handleImageChange(imageUrl)}
                />
                <img src={imageUrl}  alt={`Banner de opção ${index + 1} para a campanha`} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampoImagem;
