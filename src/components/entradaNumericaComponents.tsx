
import styles from '../styles/entrada.module.css'
interface EntradaNumericaProps {
    value: number
    text: string
    onChange: (novaEntrada: number) => void
}
export default function EntradaNumerica(props: EntradaNumericaProps) {
    return (
        <div className={styles.entrada}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={
                    () => props.onChange(props.value - 1)
                }>-</button>
                <button className={styles.btn} onClick={
                    () => props.onChange(props.value + 1)
                }>+</button>
            </div>
        </div>
    )
}