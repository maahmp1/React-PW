import styles from './Cardapio.module.scss'
import Logo from '../../assets/logo.svg'
export default function Cardapio(){
    return(
    <main>
        <nav className={ styles.menu}>
            <img src={Logo} alt="logo" />
            
        </nav>
        <header className={styles.header}>
        <div className={styles.header__text}>
            "A casa do código e da massa!"
        </div>
        </header>
        <section>
            <h3>Cardápio</h3>
        </section>
    </main>
    );
}