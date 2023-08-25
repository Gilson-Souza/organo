import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import ListaCampanha from './componentes/ListaCampanha';
import Animacao from './componentes/Animacao';
import Rodape from './componentes/Rodape';

function App() {

  const listas = [
    {nome: 'Campanhas'},
  ]

  const [campanhas, setCampanhas] = useState([])

  const aNovaCampanhaAdicionada = (campanha) => {
    setCampanhas([...campanhas, campanha])
  }

  return (
    <div className="App">
      <Banner/>
        <div className="container">
          <Animacao gifPath="https://media.tenor.com/eIBXgrLR4ZwAAAAd/minecraft.gif"/>  
          <Formulario lista={listas.map(lista => lista.nome)} aNovaCampanhaAdicionada={campanha => aNovaCampanhaAdicionada(campanha)}/>
          <Animacao gifPath="https://media.tenor.com/K9ZazwjOMKYAAAAd/minecraft.gif"/>   
        </div>

      {listas.map(lista => <ListaCampanha  
        key={lista.nome}
        nome={lista.nome} 
        campanhas={campanhas}
        />
      )} 
        
      <Rodape/>
      
    </div>
  );
}

export default App;



