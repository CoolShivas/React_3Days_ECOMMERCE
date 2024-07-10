import { createPortal } from "react-dom";
import styles from "./ModalOverLay.module.css";



const Backdrop = (props) => {
    return (<div className={styles.backdrop} onClick={props.hideOverlayOut}></div>)
};


const Modal = (props) => {
    return (<div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>)
};


const portalElement = document.getElementById("overlay");

const ModalOverLay = (props) => {
    return (
        <>
            {createPortal(<Backdrop hideOverlayOut={props.hideOverlayOut}></Backdrop>, portalElement)}
            {createPortal(<Modal>
                {props.children}
            </Modal>, portalElement)}
        </>
    )
}

export default ModalOverLay;