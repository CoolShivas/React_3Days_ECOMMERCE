import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = () => {

    const cartItems = useSelector((state) => state.bucket.cartItems);
    console.log(cartItems); // Getting the data after on clicking on add to cart button to cart;

    return (
        <>
            <div className="cart_container">
                <div className={styles.cart_header}>
                    <p> name </p>
                    <p> image </p>
                    <p> description </p>
                    <p> price </p>
                </div>
            </div>
        </>
    )
}

export default Cart;