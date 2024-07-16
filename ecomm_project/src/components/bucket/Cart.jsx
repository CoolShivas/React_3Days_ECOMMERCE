import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = () => {

    const cartItems = useSelector((state) => state.bucket.cartItems);
    console.log(cartItems); // Getting the data after on clicking on add to cart button to cart;

    return (
        <>
            <div className="cart_container">
                <table className="table">
                    <thead>
                        <tr className={styles.thead_tr_divs}>
                            <th> name </th>
                            <th> image </th>
                            <th> details </th>
                            <th> price </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems?.map((brr) => {
                            return (<tr key={brr.id}>
                                <th> {brr.name} </th>
                                <th className={styles.cart_th__image}>
                                    <img src={brr.image} alt="image not found" sizes={"20px"} />
                                </th>
                                <th> {brr.details} </th>
                                <th>
                                    Rs.{brr.price}/-
                                </th>
                            </tr>)
                        })}
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default Cart;