import Link from "next/link";

//discriminated union type
type ButtonComponentProps =
    |{ //button / submit
        children: React.ReactNode;
        href?: never;
        buttonType: "button" | "submit";
        variant: "primary" | "secondary",
        disabled?: boolean,
        onClick?: () => void;
    }| { //link
        children: React.ReactNode;
        href: string;
        buttonType: "link";
        variant: "primary" | "secondary",
        disabled?: boolean,
        onClick?: never;
    };
    

function ButtonComponent({ children, href, buttonType, variant, disabled, onClick }: ButtonComponentProps) {
    const buttonStyles = [
        "button", //always applied
        (buttonType === "button" || buttonType === "submit") && variant === "primary" && "button--primary",
        (buttonType === "button" || buttonType === "submit") && variant === "secondary" && "button--secondary",
        buttonType === "link" && variant === "primary" && "button--primary",
        buttonType === "link" && variant === "secondary" && "button--secondary",
        disabled && variant === "primary" && "button--primary--disabled",
        disabled && variant === "secondary" && "button--secondary--disabled"
    ]
        .filter(Boolean)
        .join(" ");

    if (buttonType === "link") {
        return (
            <Link href={href} className={buttonStyles}>
                <span className="button__label">{children}</span>
            </Link>
        );
    }

    if (buttonType === "submit") {
        return (
            <button type="submit" className={buttonStyles} disabled={disabled}>
                <span className="button__label">{children}</span>
            </button>
        );
    }

    if (buttonType === "button") {
        return (
            <button type="button" className={buttonStyles} disabled={disabled} onClick={onClick}>
                <span className="button__label">{children}</span>
            </button>
        );
    }
}

export default ButtonComponent;

/*---------------------- Classes -------------------------*/
//button class always applied automatically
//To apply button--primary or button--secondary --- pass a prop called variant with a value of either primary/secondary
//To apply button--primary--disabled or button--secondary--disabled --- pass a prop called disabled with a value of true/false



/*---------------------- Anchor link -------------------------*/
//USAGE: If you need an anchor link which is styled like a button but is used for navigation and not to perform actions
//buttonType prop: If a value of 'link' is passed an anchor link styled to look like a button will render


/*---------------------- Submit button -------------------------*/
//USAGE: If you need a button for a form
//buttonType prop: If a value of 'submit' is passed an button for form submissions is rendered


/*---------------------- Ordinary button -------------------------*/
//USAGE: If you need an ordinary button that performs an action, e.g. adds items to a basket or opens a modal.
//buttonType prop: If a value of 'button' is passed the defult button will render