import Image from "next/image";

type CarouselCardComponentProps = {
    carouselImage: string;
    carouselImageAlt: string;
    carouselTitle: string;
    carouselSubTitle: string;
};

function CarouselCardComponent({ carouselImage, carouselImageAlt, carouselTitle, carouselSubTitle }: CarouselCardComponentProps) {
    return ( 
        <div className="carouselCardComponent">
            <div className="carouselCardComponent__image-wrapper">
                <Image 
                    src={carouselImage}
                    alt={carouselImageAlt}
                    fill
                    className="carouselCardComponent__image"
                />
            </div>
            <div className="body body--medium body--medium-heavy">{carouselTitle}</div>
            <div className="body body--small">{carouselSubTitle}</div>
        </div>
    );
}

export default CarouselCardComponent;