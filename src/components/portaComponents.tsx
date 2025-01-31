import styles from "../styles/porta.module.css";
import PortaModel from "../model/portaModel";
import Presente from "./presenteComponents";

interface PortaProps {
    value: PortaModel
    onchange: (novaPorta: PortaModel) => void
}
export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = () => props.onchange(porta.alternarSelecao())
    const abrir = (e: { stopPropagation: () => void; }) => {
        e.stopPropagation()
        props.onchange(porta.abrir())
    }

    function redenrizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`} >
                {porta.fechada ? redenrizarPorta() : porta.temPresente ? <Presente /> : false}
            </div>
            <div className={styles.chao}></div>
        </div>
    );
}