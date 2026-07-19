//services
import { getAccordion } from "@/services/getAccordion";
import { getFiftyFifty } from "@/services/getFiftyFifty";
import { getCarousel } from '@/services/getCarousel';

//modules
import AccordionModule from "@/modules/AccordionModule";
import BannerModule from "../../modules/BannerModule";
import FiftyFiftyModule from "@/modules/FiftyFiftyModule";
import CarouselModule from "@/modules/CarouselModule";

//image
import archers from "../../../public/images/banner-images/two_archers_rearshot.jpg";


async function AboutUsPage() {
    const accordion = await getAccordion("club-questions");
    const fiftyFifty = await getFiftyFifty("club-history");
    const carousel = await getCarousel("meet-the-team");

    return (
        <>
            <BannerModule
                bannerTitle="About us"
                bannerImage={archers}
                bannerImageAlt="two archers"
            />
            <FiftyFiftyModule
                fiftyFifty={fiftyFifty}
                portraitImage         
            />
            <CarouselModule 
                carousel={carousel}
            />
            <AccordionModule
                accordion={accordion}
            />
        </>
    );
}

export default AboutUsPage;