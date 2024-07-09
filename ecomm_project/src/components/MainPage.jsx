import MyRouters from "./MyRouters";
import styles from "./MainPage.module.css";
import Header from "./header/Header";

const MainPage = () => {
    return (
        <>
            <div className={styles.mainpage_container}>
                <Header></Header>
            </div>
            <div>
                <MyRouters></MyRouters>
            </div>
        </>
    )
}

export default MainPage;