import styles from "./ProductDetailPage.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {

    const dataItem = useSelector((store) => store.production.dataItem);
    console.log(dataItem);

    const [fixImage, setFixImage] = useState(dataItem.image);

    return (
        <div className={styles.product_page__div}>
            <div className={styles.grid_three__columns}>

                <div className={styles.product_images}>
                    {dataItem.map((zrr) => {
                        return (
                            <li key={zrr.id}>
                                <img
                                    src={zrr.image}
                                    alt="image not found"
                                    style={{ width: "150px", height: "150px" }}
                                    onClick={() => {
                                        setFixImage(zrr.image);
                                    }}
                                />
                            </li>
                        );
                    })}
                </div>

                <div className="product_single__image">
                    <img src={fixImage} alt="image not found" style={{ width: "150px", height: "150px" }} />
                </div>

                <div className={styles.product_details}>
                    <p> Stars & Rating </p>
                    <p> Reviews </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                        accusamus corporis quaerat, quibusdam exercitationem eligendi
                        magni veritatis. Quaerat, impedit distinctio! Voluptates nam quia
                        eum odit.
                    </p>
                    <p> Marvolous </p>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailPage;