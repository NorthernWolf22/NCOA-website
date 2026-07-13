import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//discriminated union type
type IconComponentProps =
    | {
        iconType: "button";
        iconName: IconProp;
        iconSize: "small" | "medium" | "large";
        variant: "primary" | "secondary" | "primary-unfilled" | "secondary-unfilled";
        rounded?: boolean;
        onClick?: () => void;
        disabled?: boolean;
        className?: string;
    } | {
        iconType: "decorative";
        iconName: IconProp;
        iconSize: "small" | "medium" | "large";
        variant: "primary" | "secondary" | "primary-unfilled" | "secondary-unfilled";
        rounded?: boolean;
        onClick?: never;
        disabled?: never;
        className?: string;
    }

function IconComponent({ iconType, iconName, iconSize, variant, rounded, onClick, disabled, className }: IconComponentProps) {
    const ICON_SIZES = {
        large: 40,
        medium: 30,
        small: 20
    };

    const sizePx = ICON_SIZES[iconSize];

    const iconStyles = [
        "icon", //always applied
        iconType === "button" && "icon--button",
        iconType === "decorative" && "icon--decorative",
        variant === "primary" && "icon--primary",
        rounded && "icon--rounded",
        variant === "primary-unfilled" && !disabled && "icon--primary--unfilled",
        variant === "secondary" && "icon--secondary",
        variant === "secondary-unfilled" && !disabled && "icon--secondary--unfilled",
        variant === "primary" && disabled && "icon--primary--disabled",
        variant === "secondary" && disabled && "icon--secondary--disabled",
        (variant === "primary-unfilled" || variant === "secondary-unfilled") && disabled && "icon--unfilled--disabled",
        className && className 
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            {
                (iconType === "button") && //can be used for nav open/close or carousel buttons
                <button
                    onClick={onClick}
                    className={iconStyles} style={{
                        width: sizePx,
                        height: sizePx
                    }}
                    disabled={disabled}
                >
                    <FontAwesomeIcon icon={iconName} />
                </button>
            }

            {
                (iconType === "decorative") && //can be used on a button as visual but non functional
                <div className={iconStyles} style={{
                    width: sizePx,
                    height: sizePx,
                }}>
                    <FontAwesomeIcon icon={iconName} />
                </div>
            }
        </>
    );
}

export default IconComponent;