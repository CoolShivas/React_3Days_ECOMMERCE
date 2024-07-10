import styles from "./Cart.module.css";

const Cart = () => {
    return (
        <>
            <div className="cart_container">
                <div className={styles.cart_header}>
                    <p> name </p>
                    <p> image </p>
                    <p> description </p>
                    <p> price </p>
                    <p> Remove </p>
                </div>
            </div>
        </>
    )
}

export default Cart;