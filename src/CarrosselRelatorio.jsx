import React, { useState, useEffect, useRef } from 'react';
import { fetchRelatoriosDoSupabase } from './service/supabase';
import * as pdfjsLib from 'pdfjs-dist';
import './Carrossel.css';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const handleDownload = async (url, nome) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${nome}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (e) {
    console.error('Erro ao baixar PDF:', e);
  }
};

const PdfCard = ({ arq }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const renderCapa = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({
          url: arq.linkPreview,
          cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/cmaps/',
          cMapPacked: true,
          withCredentials: false,
        });

        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const containerWidth = canvas.parentElement?.clientWidth || 280;
        const viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;

        if (!cancelled) setLoaded(true);
      } catch (e) {
        if (!cancelled) setErro(true);
        console.error('Erro ao renderizar PDF:', arq.nome, e);
      }
    };

    renderCapa();
    return () => { cancelled = true; };
  }, [arq.linkPreview]);

  return (
    <div className="card-relatorio">
      <div className="card-capa">
        {!loaded && !erro && (
          <div className="capa-placeholder">
            <span>Carregando...</span>
          </div>
        )}
        {erro && (
          <div className="capa-placeholder capa-erro">
            <span>PDF</span>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="capa-canvas"
          style={{ display: loaded ? 'block' : 'none' }}
        />
      </div>
      <div className="card-info">
        <h3>{arq.nome}</h3>
        <div className="acoes">
          <a href={arq.linkPreview} target="_blank" rel="noreferrer">Visualizar</a>
          <button
            className="btn-baixar"
            onClick={() => handleDownload(arq.linkDownload, arq.nome)}
          >
            Baixar
          </button>
        </div>
      </div>
    </div>
  );
};

const CarrosselRelatorio = () => {
  const [arquivos, setArquivos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await fetchRelatoriosDoSupabase();
        setArquivos(dados);
      } catch (e) {
        setErro('Não foi possível carregar os relatórios.');
      } finally {
        setLoading(false);
      }
    };
    carregarDados();
  }, []);

  if (loading) return <div className="loader">Carregando Indicadores Culturais...</div>;
  if (erro) return <div className="loader erro">{erro}</div>;
  if (arquivos.length === 0) return <div className="loader">Nenhum relatório encontrado.</div>;

  return (
    <div className="container-carrossel">
      <div className="grid-arquivos">
        {arquivos.map(arq => (
          <PdfCard key={arq.id} arq={arq} />
        ))}
      </div>
    </div>
  );
};

export default CarrosselRelatorio;