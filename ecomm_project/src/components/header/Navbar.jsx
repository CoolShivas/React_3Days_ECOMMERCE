import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar_container}>
                <ul>
                    <li>
                        <NavLink to="/homepage"> home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutpage"> about </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactpage"> contact </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addproducts" className={styles.navbar_icons}> <MdOutlineAddCircle /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={styles.navbar_icons}> <FaUserCircle /> </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;