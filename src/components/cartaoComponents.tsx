
import styles from '../styles/cartao.module.css'

interface CartaoProps {
    bgcolor?: string;
    children?: React.ReactNode;
}
export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? '#999',
            }}
        >
            {props.children}
        </div>
    );
}