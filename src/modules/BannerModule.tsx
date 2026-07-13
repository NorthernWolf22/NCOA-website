import Image, { StaticImageData } from "next/image";


type BannerModuleProps = {
    bannerTitle: string;
    bannerImage: string | StaticImageData;
    bannerImageAlt: string;
};

function BannerModule({ bannerTitle, bannerImage, bannerImageAlt }: BannerModuleProps) {
    return (
        <section className="bannerModule">
            <Image
                src={bannerImage}
                alt={bannerImageAlt}
                fill
                className="bannerModule__image"
                priority
            />
            <div className="h3 bannerModule__block">{bannerTitle}</div>
        </section>
    );
}

export default BannerModule;