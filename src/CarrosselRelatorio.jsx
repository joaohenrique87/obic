import React, { useState, useEffect } from 'react';
import { fetchRelatoriosDoDrive } from './service/drive';
import './Carrossel.css';

const CarrosselRelatorio = () => {
  const [arquivos, setArquivos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await fetchRelatoriosDoDrive();
      setArquivos(dados);
      setLoading(false);
    };
    carregarDados();
  }, []);

  if (loading) return <div className="loader">Carregando Indicadores Culturais...</div>;

  return (
    <div className="container-carrossel">
      
      <div className="grid-arquivos">
        {arquivos.map(arq => (
          <div key={arq.id} className="card-relatorio">
            <img src={arq.thumb} alt={arq.nome} />
            <h3>{arq.nome}</h3>
            <div className="acoes">
              <a href={arq.linkPreview} target="_blank" rel="noreferrer">Visualizar</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrosselRelatorio;