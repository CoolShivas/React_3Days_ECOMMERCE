import { setLogOut } from "../../store/authSlice";
import { BsCart } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {

    const cartItems = useSelector((state) => state.bucket.cartItems);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handlerOnLogOut = () => {
        console.log("Successfully Log-Out");
        dispatch(setLogOut({
            isUserLoggedIn: false,
            userToken: "",
            userId: null,
        }));
        localStorage.removeItem("Save-Token");
        localStorage.removeItem("Save-email");
    };

    const bucketQuantity = cartItems.reduce((initialVal, currElem) => {
        initialVal = initialVal + currElem.cartQty;
        return initialVal;
    }, 0);
    console.log(bucketQuantity); // Getting the cartQty;

    return (
        <>
            <nav className={styles.navbar_container}>
                <ul>
                    <li>
                        <NavLink to="/mainpage/homepage"> home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mainpage"> store </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mainpage/aboutpage"> about </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/mainpage/contactpage"> contact </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/mainpage/cart" className={styles.navbar_icons}>
                            <div className={styles.cart_badge}>{bucketQuantity}</div>
                            <BsCart />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mainpage/addproducts" className={styles.navbar_icons}> <MdOutlineAddCircle /> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mainpage/profile" className={styles.navbar_icons}> <FaUserCircle /> </NavLink>
                    </li>
                    <li onClick={handlerOnLogOut}>
                        <NavLink to="/auth"> <RiLogoutCircleRLine /> </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;