import styles from "./MainPage.module.css";
import Header from "./header/Header";

const MainPage = () => {
    return (
        <div className={styles.mainpage_container}>
            <Header></Header>
        </div>
    )
}

export default MainPage;