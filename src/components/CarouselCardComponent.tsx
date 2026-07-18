import Image from "next/image";

//images
import defaultCarouselImage from "../../public/images/carousel-card-images/defaultCarouselCardImage.png";

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
                    src={carouselImage ? carouselImage : defaultCarouselImage}
                    alt={carouselImageAlt}
                    fill
                    className="carouselCardComponent__image"
                />
            </div>
           {
                carouselTitle &&
               <div className="body body--medium body--medium-heavy">{carouselTitle}</div>
           }
           {
                carouselSubTitle &&
                <div className="body body--small">{carouselSubTitle}</div>
           }
        </div>
    );
}

export default CarouselCardComponent;