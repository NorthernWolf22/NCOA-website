import Image from "next/image";
import LinkComponent from "./LinkComponent";

type LogoComponentProps = {
    logoImage: string;
    logoImageAlt: string;
};

function LogoComponent({ logoImage, logoImageAlt }: LogoComponentProps) {
    return (
        <LinkComponent linkType="link" href="/" className="logo">
            <Image src={logoImage} alt={logoImageAlt} className="logo__image" />
            <span className="body body--large">NCOA</span>
        </LinkComponent>
    );
}

export default LogoComponent;