import styles from "./AddProducts.module.css";


const AddProducts = () => {
    return (
        <div className={styles.add_products__container}>
            <form action="#">
                <div>
                    <label htmlFor="name"> Product Name </label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="details"> Product Details </label>
                    <input type="text" id="details" />
                </div>
                <div>
                    <label htmlFor="price"> Product Price </label>
                    <input type="number" id="price" />
                </div>
                <div className={styles.actions}>
                    <button className="btn btn-info"> Add to products </button>
                </div>
            </form>
        </div>
    )
}

export default AddProducts;

