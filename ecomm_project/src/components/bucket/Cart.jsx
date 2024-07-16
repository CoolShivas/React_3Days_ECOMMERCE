import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Cart.module.css";
import { setDecreaseCartQty, setRemoveFromCart } from "../../store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.bucket.cartItems);
    console.log(cartItems); // Getting the data after on clicking on add to cart button to cart;

    const dispatch = useDispatch();

    const handlerOnRemoveFromCart = (brr) => {
        console.log(brr);
        dispatch(setRemoveFromCart(brr));
    };

    const handlerOnDecreaseQty = (brr) => {
        console.log(brr);
        dispatch(setDecreaseCartQty(brr));
    };

    return (
        <>
            <div className="cart_container">
                {cartItems.length === 0 ? (
                    <div>
                        <p className={styles.cart_para}> Your cart is empty. </p>
                        <center>
                            <Link to="/mainpage">
                                <b> click on continue shopping </b>
                            </Link>
                        </center>
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr className={styles.thead_tr_divs}>
                                <th> name </th>
                                <th> image </th>
                                <th> details </th>
                                <th> quantity </th>
                                <th> price </th>
                                <th> remove </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems?.map((brr) => {
                                return (
                                    <tr key={brr.id}>
                                        <th> {brr.name} </th>
                                        <th className={styles.cart_th__image}>
                                            <img
                                                src={brr.image}
                                                alt="image not found"
                                                sizes={"20px"}
                                            />
                                        </th>
                                        <th> {brr.details} </th>
                                        <th>

                                            <FaMinusCircle className={styles.cart_qty_icons}
                                                onClick={() => handlerOnDecreaseQty(brr)}
                                            />
                                            {brr.cartQty}
                                            <FaPlusCircle className={styles.cart_qty_icons} />
                                        </th>
                                        <th>Rs.{brr.price}/-</th>
                                        <th>
                                            <span
                                                className={styles.cart_remove__btn}
                                                onClick={() => handlerOnRemoveFromCart(brr)}
                                            >
                                                <FaDeleteLeft />
                                            </span>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Cart;
