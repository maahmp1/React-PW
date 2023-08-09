import styles from './Cardapio.module.scss'
import Logo from '../../assets/logo.svg'
export default function Cardapio(){
    return(
    <main>
        <nav className={ styles.menu}>
            <img src={Logo} alt="logo" />
        </nav>
    </main>
    );
}