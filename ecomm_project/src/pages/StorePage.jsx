import { useSelector } from "react-redux";
import styles from "./StorePage.module.css";
import { useEffect, useState } from "react";


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

    const [dataItem, setDataItem] = useState([]);

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
                setDataItem(loadServerData);

            } catch (error) {
                console.log(error.message);
            }
        };
        getDataFromServer();
    }, []);

    // console.log(dataItem);

    return (
        <>
            <div className={styles.product_details__container}>
                {dataItem?.map((arr) => {
                    return <div className={styles.item_card} key={arr.id}>
                        <div className={styles.item_card__images}>

                            <img src={arr.imageUrl} alt="image not found" />

                        </div>

                        <div className={styles.item_card__details}>
                            <p> {arr.title} </p>
                            <p>  Rs {arr.price}/-  </p>
                            <button className="btn btn-success">Add to Cart</button>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default StorePage;

