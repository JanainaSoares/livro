
import styles from "./Header.module.css"

function Header(params) {
    return(
        <header className={styles.header}>
            <span>titulo</span>
            <nav>
                <a href="#">home</a>
                <a href="#">ler</a>
            </nav>
        </header>
    )
    
}
export default Header;