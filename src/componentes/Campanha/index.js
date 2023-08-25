import React, { useState, useEffect } from 'react';
import './Campanha.css';
import { format, differenceInSeconds, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

const Campanha = ({ nome, imagem, data, hora }) => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const targetDate = new Date(`${data} ${hora}`);
    const currentTime = new Date();
    const timeDifference = differenceInSeconds(targetDate, currentTime);

    setRemainingTime(timeDifference);
    setStarted(timeDifference <= 0);

    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data, hora]);

  const localDate = new Date(data);
  const adjustedDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
  const dataFormatada = format(adjustedDate, 'dd/MM/yyyy');

  const days = Math.floor(remainingTime / 86400);
  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const informacao =
    started ? `Campanha ativa a:` : `${days}d ${hours % 24}h ${minutes % 60}m ${seconds}s`;

  return (
    <section className="campanha">
      <img src={imagem} alt='banner da campanha'></img>
      <h3>{nome}</h3>
      <div className='descricao-campanha'>
        <p>{dataFormatada}</p>
        <p>{hora}</p>
      </div>
      {started ? (
        <p className="contador-ativo">
          <strong>Campanha ativa</strong>
        </p>
      ) : (
        <p className="contador-em-espera">
          <strong>Campanha começa em:</strong> {informacao}
        </p>
      )}
    </section>
  );
}

export default Campanha;








