import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import CampoData from '../CampoData';
import CampoImagem from '../CampoImagem';
import './Formulario.css'

const Formulario = (props) => {

    const horarios = [
        '',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00', 
    ]

    const imagens = [
        'https://pbs.twimg.com/media/FEa5FiNWUAMcFhJ.jpg',
        'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8HQ044l4C-1AikQZqAvp4peghV_WhnLuQslecRIxhY5CuuZQMjlNj26rwPQPlX9Qrwc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcZuTrIHk20lgmc8xo3TeAGgY380i4XLFzfq4EfhyaRS25XPE2AQQ0tcSoFoTnhFmBeY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2IUvspDTMW6Si-VBr6BWM4cSENF5s2merXFTF_8wUI1vOR3seIjX-1XXN9IHth0viSY&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPxFacHfaBmzOusjRUYsOaeMTKRvbOD2FZkIkTvMa_fbZwBqm0lAE4V0oLCRW1pGWxm9c&usqp=CAU',
        // ... adicione outras URLs de imagem aqui
    ];
   

    const[nome, setNome] = useState('')
    const[dataInicio, setDataInicio] = useState('')
    const[imagemUrl, setImagem] = useState('');
    const[horaInicio, setHoraInicio] = useState('')

    const [imagemError, setImagemError] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();

        if (!imagemUrl) {
            setImagemError('Selecione uma imagem obrigatoriamente.');
            return;
        }

        props.aNovaCampanhaAdicionada({
            nome: nome,
            dataInicio: dataInicio,
            imagem: imagemUrl,
            horaInicio: horaInicio,
        })

        setNome('')
        setDataInicio('')
        setImagem('')
        setHoraInicio('')
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar uma Campanha</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome da Campanha" 
                    placeholder="Digite um nome"
                    valor={nome}
                    aoAlterado={valor=> setNome(valor)}
                />

                <CampoData
                    obrigatorio={true} 
                    label="Data de Inicio" 
                    valor={dataInicio}
                    aoAlterado={valor=> setDataInicio(valor)}

                />

                <CampoImagem 
                    obrigatorio={true} 
                    itens={imagens}
                    valor={imagemUrl}
                    aoAlterado={valor => {
                        setImagem(valor);
                        setImagemError('');
                    }}
                />
                {imagemError && <p className='error-message'>{imagemError}</p>}
                
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Horário de Inicio" 
                    itens={horarios}
                    valor={horaInicio}
                    aoAlterado={valor=> setHoraInicio(valor)}
                /> 
                <Botao>
                    Criar nova Campanha   
                </Botao>         
            </form>    
        </section>
    )
}

export default Formulario;