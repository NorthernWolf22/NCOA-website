import { ChangeEvent } from "react";

type SingleInputProps = {
    type: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void;
    required: boolean;
    ariaDescribedby?: string | undefined;
    ariaInvalid?: string | undefined;
    label: string;
};

function SingleInput({ type, name, value, placeholder, onChange, required, ariaDescribedby, ariaInvalid, label }: SingleInputProps) {
    const singleInputStyles = [
        "input", //always applied
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            <label htmlFor={name}>{required ? "* " : ""} {label}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                aria-describedby={ariaDescribedby}
                aria-invalid={ariaInvalid}
                className={singleInputStyles}
            />
        </>
    );
}

export default SingleInput;