'use client';
import Cartao from "@/components/cartaoComponents";
import styles from '../styles/formulario.module.css'
import Link from "next/link";
import EntradaNumerica from "@/components/entradaNumericaComponents";
import { useState } from "react";
export default function Formulario({ }) {
    const [qtdePortas, setQtdePortas] = useState(3)
    const [portaComPresente, setPortaComPresente] = useState(2)

    const salvarDadosNoLocalStorage = () => {
        localStorage.setItem(
            'jogoDados',
            JSON.stringify({ qtdePortas, portaComPresente })
        );
    };
    return (
        <div className={styles.formalario}>
            <div>
                <Cartao bgcolor='#c0392b'>
                    Monty Hall
                </Cartao>
                <Cartao>
                    <EntradaNumerica text='Quantidade de Portas:' value={qtdePortas}
                        onChange={novaQtde => setQtdePortas(novaQtde)} />
                </Cartao>
            </div>
            <div>
                <Cartao >
                    <EntradaNumerica text='Porta com presente:' value={portaComPresente}
                        onChange={novaQtde => setPortaComPresente(novaQtde)} />
                </Cartao>
                <Cartao bgcolor='#27ae60'>
                    <Link
                        href="/jogo"
                        onClick={salvarDadosNoLocalStorage} className={styles.link}
                    >
                        <h2>Iniciar</h2>
                    </Link>

                </Cartao>
            </div>
        </div>
    )
}