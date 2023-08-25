import { useState, useEffect } from 'react';
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

  const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia('(max-width: 940px)').matches);

  const aNovaCampanhaAdicionada = (campanha) => {
    setCampanhas([...campanhas, campanha])
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 940px)');
    const updateScreenSize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };
    mediaQuery.addListener(updateScreenSize);
    return () => {
      mediaQuery.removeListener(updateScreenSize);
    };
  }, []);

  return (
    <div className="App">
      <Banner/>
        <div className="container">
        {!isSmallScreen && <Animacao gifPath="https://media.tenor.com/eIBXgrLR4ZwAAAAd/minecraft.gif" />}
        <Formulario lista={listas.map(lista => lista.nome)} aNovaCampanhaAdicionada={campanha => aNovaCampanhaAdicionada(campanha)} />
        {!isSmallScreen && <Animacao gifPath="https://media.tenor.com/K9ZazwjOMKYAAAAd/minecraft.gif" />}
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



