import styles from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_div}>
                <h1> eCommerce </h1>
                <input type="text" placeholder="search your product here" className={styles.input_search__bar} />
                <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Header;