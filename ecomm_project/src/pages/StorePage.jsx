import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { setDataItem, setDelete, setItemsArr } from "../store/productSlice";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StorePage.module.css";
import { useEffect, useState } from "react";
import { setAddToCartItems } from "../store/cartSlice";


const productsArr = [
    {
        id: "01A",

        title: "Colors",

        price: 100,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

        quantity: 1,
    },

    {
        id: "02B",
        title: "Black and white Colors",

        price: 50,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity: 1,
    },

    {
        id: "03C",

        title: "Yellow and Black Colors",

        price: 70,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity: 1,
    },

    {
        id: "04D",

        title: "Blue Color",

        price: 100,

        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

        quantity: 1,
    },
];



const StorePage = () => {

    // const [dataItem, setDataItem] = useState([]); // // local state variable

    const dataItem = useSelector((store) => store.production.dataItem);

    const dispatch = useDispatch();

    useEffect(() => {
        const getDataFromServer = async () => {
            try {
                const response = await fetch(`https://daysecommerce01-default-rtdb.firebaseio.com/eCommerce.json`)
                if (!response.ok) {
                    throw new Error("Something went wrong with store products");
                }
                const data = await response.json();
                // console.log(data);

                const loadServerData = [];
                for (const key in data) {
                    loadServerData.push({
                        id: key,
                        ...data[key]
                    })
                }
                // setDataItem(loadServerData);
                dispatch(setDataItem(loadServerData));

            } catch (error) {
                console.log(error.message);
            }
        };

        // // Calling the api in every 2seconds for updating the data on Store Page;
        const intervalId = setInterval(() => {
            getDataFromServer();
        }, 2000);

        return () => clearInterval(intervalId);

    }, []);

    const handlerOnStoreDeleteBtn = async (arr) => {
        try {
            const response = await fetch(`https://daysecommerce01-default-rtdb.firebaseio.com/eCommerce/${arr}.json`, {
                method: "DELETE"
            });

            dispatch(setDelete(arr));
            console.log("Successfully Delete");

        } catch (error) {
            console.log(error.message);
        }
    };

    const handlerOnAddToCart = (arr) => {
        console.log(arr); // Getting the data on clicking on add to cart button;
        dispatch(setAddToCartItems(arr)); // Getting the data on clicking on add to cart button inside the cartItems;
    };

    // console.log(dataItem);

    return (
        <>
            <div className={styles.product_details__container}>

                {dataItem.length === 0 && <p className={styles.store_para}> store is empty. </p>}

                {dataItem?.map((arr) => {
                    return <div className={styles.item_card} key={arr.id}>
                        <h2> {arr.name} </h2>
                        <div className={styles.item_card__images}>

                            <Link to="/mainpage/productdetails">
                                <img src={arr.image} alt="image not found" />
                            </Link>

                        </div>

                        <div className={styles.item_card__details}>
                            <p> <b>{arr.details}</b> </p>
                            <p>  Rs {arr.price}/-  </p>
                            <div className={styles.store_actions}>
                                <button className="btn btn-success" onClick={() => handlerOnAddToCart(arr)}>Add to Cart</button>
                                <span className={styles.store_delete__btn} onClick={() => handlerOnStoreDeleteBtn(arr.id)}> <MdDeleteForever /> </span>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default StorePage;

