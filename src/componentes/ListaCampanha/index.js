import './ListaCampanha.css'
import Campanha from '../Campanha'

const ListaCampanha = (props) => {
    return (
        <section className='lista-container'>

            <div className='tamanho-lista'>

            <div className="lista-campanha">            
                <h3>{props.nome}</h3>
            </div>

            <div className='lista'>
                {props.campanhas.map( campanha => <Campanha key={campanha.nome}  nome={campanha.nome} data={campanha.dataInicio} hora={campanha.horaInicio} imagem={campanha.imagem} />) }         
            </div>   
            </div>
        </section>
    );

}


export default ListaCampanha;
