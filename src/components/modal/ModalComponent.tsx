import FocusLock from "react-focus-lock";
import { faX } from "@fortawesome/free-solid-svg-icons";
import IconComponent from "@/components/IconComponent";


type ModalComponentProps = {
    isOpen: boolean;
    status: "success" | "error" | "info";
    title: string;
    text: string;
    onClose: () => void;
    children?: React.ReactNode;
};

function ModalComponent({ isOpen, status, title, text, onClose, children }: ModalComponentProps) {
    if (!isOpen) return null; //if the isModelOpen prop is false the modal window will not show

    return (
        <div className="modal__background">
            <FocusLock returnFocus>
                <div className="modal">
                    <div className="h5">{title}</div>
                    <p className="body">{text}</p>
                    <IconComponent 
                        iconType="button" 
                        iconName={faX} 
                        iconSize="medium"
                        variant="primary"
                        onClick={onClose} 
                        className="modal__button icon--btn icon--primary icon--primary--unfiled"
                    />
                    {children}
                </div>
            </FocusLock>
        </div>
    );
}

export default ModalComponent;