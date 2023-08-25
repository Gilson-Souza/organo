import './Rodape.css'

const Rodape = () => {


    return (

        <footer className="rodape">
            
            <div className='logos'>
                <a href='https://github.com/Gilson-Souza' target="_blank"><img src='./imagens/git-hub.svg'></img></a>
            </div>

            <div>
                <p>Desenvolvido por:     <strong>Gilson C. Souza</strong></p>
            </div>

            <div className='logos'>   
                <a href='https://www.linkedin.com/in/gilsonsouza-dev' target="_blank"><img src='./imagens/linkedin.svg'></img></a>   
            </div>
  
        </footer>

    )

}

export default Rodape;