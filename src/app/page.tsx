//services
import { getAccordion } from "@/services/getAccordion";
import { getFiftyFifty } from "@/services/getFiftyFifty";
import { getBlocksItem } from "@/services/getBlocksItem";

//modules
import BannerModule from "@/modules/BannerModule";
import AccordionModule from "@/modules/AccordionModule";
import FiftyFiftyModule from "@/modules/FiftyFiftyModule";
import BlocksWithTextModule from "@/modules/BlocksWithTextModule";

//image
import female_archer from "../../public/images/banner-images/female_archer_draw.jpg";
import ButtonComponent from "@/components/ButtonComponent";

export default async function Home() {
  const accordion = await getAccordion("archery-types");
  const fiftyFifty = await getFiftyFifty("beginner-courses");
  const blocksItem = await getBlocksItem("1-to-1-coaching");

  return (
    <>
      <BannerModule
        bannerTitle="Home"
        bannerImage={female_archer}
        bannerImageAlt="two archers"
      />
      <BlocksWithTextModule
        blocksItem={blocksItem}
      />
      <AccordionModule
        accordion={accordion}
      />
      <FiftyFiftyModule
        fiftyFifty={fiftyFifty}
        portraitImage={false}
      >
        {
          (fiftyFifty?.fiftyButtonUrl && fiftyFifty?.fiftyButtonLabel) &&
          <ButtonComponent
            href={fiftyFifty.fiftyButtonUrl}
            buttonType="link"
            variant="primary"
          >
            {fiftyFifty.fiftyButtonLabel}
          </ButtonComponent>
        }
      </FiftyFiftyModule>
    </>
  );
}