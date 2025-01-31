'use client';
import styles from '../../styles/jogo.module.css';
import Porta from "../../components/portaComponents";
import { atualizarPortas, criarPortas } from "../../function/portaFunction";
import { useEffect, useState } from "react";
import Link from 'next/link';
import PortaModel from '@/model/portaModel';
export default function Jogo() {
  const [validos, setValidos] = useState(false);
  const [portas, setPortas] = useState<PortaModel[]>([]);

  useEffect(() => {
    const item = localStorage.getItem('jogoDados');
    const dados = item ? JSON.parse(item) : null;
    if (dados) {
      const { qtdePortas, portaComPresente } = dados;
      const qtdePortasValida = Number(qtdePortas) >= 3 && Number(qtdePortas) <= 100;
      const temPresente = Number(portaComPresente);
      const portaComPresenteValida = temPresente > 0 && temPresente <= qtdePortas;
      setValidos(qtdePortasValida && portaComPresenteValida);
    }

  }, [portas]);

  useEffect(() => {
    const item = localStorage.getItem('jogoDados');
    const dados = item ? JSON.parse(item) : null;
    if (dados) {
      const { qtdePortas, portaComPresente } = dados;
      const portasCriadas = criarPortas(Number(qtdePortas), Number(portaComPresente));
      setPortas(portasCriadas);
    }
  }, []);

  function renderizarPortas() {
    return portas.map((porta) => (
      <Porta
        key={porta.numero}
        value={porta}
        onchange={(novaPorta) =>
          setPortas(atualizarPortas(portas, novaPorta))
        }
      />
    ));
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{
        validos ? renderizarPortas() :
          <h2 >Valores inválidos</h2>
      }</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}