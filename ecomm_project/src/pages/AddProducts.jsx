import { setItemsArr } from "../store/productSlice";
import { useState } from "react";
import styles from "./AddProducts.module.css";
import { useDispatch } from "react-redux";
import ModalOverLay from "../ui/ModalOverLay";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const AddProducts = ({ hideOverLayOut }) => {

    const navigate = useHistory();

    const dispatch = useDispatch();

    const [products, setProducts] = useState({
        name: "",
        image: "",
        details: "",
        price: "",
    });

    const handlerOnChange = (e) => {
        setProducts({
            ...products, [e.target.id]: e.target.value
        })
    };

    const handlerOnSubmitForm = async (e) => {
        e.preventDefault();
        console.log(products);

        try {
            const response = await fetch(`https://daysecommerce01-default-rtdb.firebaseio.com/eCommerce.json`, {
                method: "POST",
                body: JSON.stringify(products),
            });

            if (!response.ok) {
                throw new Error("Something went wrong with add products");
            }

            const data = await response.json();
            // console.log(data);
            dispatch(setItemsArr(data));

        } catch (error) {
            console.log(error.message);
        }

        setProducts({
            name: "",
            image: "",
            details: "",
            price: "",
        });

    };

    const handlerOverLayCloseAddProPage = () => {
        navigate.replace("/mainpage");
    };


    return (
        <ModalOverLay hideOverLayOut={hideOverLayOut}>
            <div className={styles.add_products__container}>
                <form onSubmit={handlerOnSubmitForm}>
                    <div>
                        <label htmlFor="name"> Product Name </label>
                        <input type="text" id="name" onChange={handlerOnChange} required />
                    </div>
                    <div>
                        <label htmlFor="image"> Product Image </label>
                        <input type="link" id="image" onChange={handlerOnChange} required />
                    </div>
                    <div>
                        <label htmlFor="details"> Product Details </label>
                        <input type="text" id="details" onChange={handlerOnChange} required />
                    </div>
                    <div>
                        <label htmlFor="price"> Product Price </label>
                        <input type="number" id="price" onChange={handlerOnChange} required />
                    </div>
                    <div className={styles.actions}>
                        <button className="btn btn-info" type="submit"> Add to products </button>
                        <button className="btn btn-danger mt-3" onClick={handlerOverLayCloseAddProPage}> Close </button>
                    </div>
                </form>
            </div>
        </ModalOverLay>
    )
}

export default AddProducts;

