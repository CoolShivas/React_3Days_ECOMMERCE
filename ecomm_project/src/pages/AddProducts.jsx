import { useState } from "react";
import styles from "./AddProducts.module.css";


const AddProducts = () => {

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
            console.log(data);

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

    return (
        <div className={styles.add_products__container}>
            <form onSubmit={handlerOnSubmitForm}>
                <div>
                    <label htmlFor="name"> Product Name </label>
                    <input type="text" id="name" onChange={handlerOnChange} />
                </div>
                <div>
                    <label htmlFor="image"> Product Image </label>
                    <input type="link" id="image" onChange={handlerOnChange} />
                </div>
                <div>
                    <label htmlFor="details"> Product Details </label>
                    <input type="text" id="details" onChange={handlerOnChange} />
                </div>
                <div>
                    <label htmlFor="price"> Product Price </label>
                    <input type="number" id="price" onChange={handlerOnChange} />
                </div>
                <div className={styles.actions}>
                    <button className="btn btn-info" type="submit"> Add to products </button>
                </div>
            </form>
        </div>
    )
}

export default AddProducts;

