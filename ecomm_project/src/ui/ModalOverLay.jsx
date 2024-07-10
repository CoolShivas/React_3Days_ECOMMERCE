import { createPortal } from "react-dom";
import styles from "./ModalOverLay.module.css";



const Backdrop = (props) => {
    return (<div className={styles.backdrop}></div>)
};


const Modal = (props) => {
    return (<div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>)
};



const ModalOverLay = (props) => {
    return (
        <>
            {createPortal(<Backdrop></Backdrop>)}
            {createPortal(<Modal>
                {props.children}
            </Modal>)}
        </>
    )
}

export default ModalOverLay;