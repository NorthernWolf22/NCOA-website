export type ModalComponentState = {
    isOpen: boolean;
    status: "success" | "error" | "info";
    title: string;
    text: string;
};