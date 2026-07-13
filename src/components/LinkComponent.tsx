import Link from "next/link";

//discriminated union type 
type LinkComponentProps =
    | {
        children: React.ReactNode;
        linkType: "link";
        href: string;
        variant?: "heavy";
        onClick?: never; 
        className?: string;
    }
    | {
        children: React.ReactNode;
        linkType: "button";
        href?: never;
        variant?: "heavy";
        onClick: () => void;
        className?: string;
    };

function LinkComponent({ children, href, linkType, variant, onClick, className }: LinkComponentProps) {
    const linkStyles = [
        "link", //always applied
        linkType === "button" && "link--button",
        variant === "heavy" && "link--heavy",
        className && className
    ]
        .filter(Boolean)
        .join(" ");

    if(linkType === "button") {
        return (
            <button type="button" className={linkStyles} onClick={onClick}>{children}</button>
        );
    }

    if(linkType === "link") {
        return (
            <Link href={href} className={linkStyles}>{children}</Link>
        );
    }
}

export default LinkComponent;


//ORDINARY LINKS
//To get an ordinary link (e.g. to insert in to paragraph):
//Prop: linkType="link"

//To button which is styled as a link (e.g. a button which opens a nav dropdown)
//Prop: linkType="button" 