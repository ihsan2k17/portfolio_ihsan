import ModalSUbsSTyle from './modalsubs.module.css';
import { ReactNode } from 'react';
interface props {
    showModal: boolean;
    closeModal: () => void;
    children: ReactNode;
}

const Modals = ({showModal, closeModal, children}:props) => {
    if (!showModal) {
        return null
    }
    return (
        <div className={ModalSUbsSTyle.modal_overlay}>
            <div className={ModalSUbsSTyle.modal_content}>
                <span className={ModalSUbsSTyle.close} onClick={closeModal}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modals