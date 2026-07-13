import { notFound } from "next/navigation";

//services
import { getAccordion } from "@/services/getAccordion";
import { getFiftyFifty } from "@/services/fiftyFifty";
import { getBlocksItem } from "@/services/getBlocksItem";

//modules
import BannerModule from "@/modules/BannerModule";
import AccordionModule from "@/modules/AccordionModule";
import FiftyFiftyModule from "@/modules/FiftyFiftyModule";
import BlocksWithTextModule from "@/modules/BlocksWithTextModule";

//image
import female_archer from "../../public/images/banner-images/female_archer_draw.jpg";

export default async function Home() {
  const accordion = await getAccordion("archery-types");
  const fiftyFifty = await getFiftyFifty("beginner-courses");
  const blocksItem = await getBlocksItem("1-to-1-coaching");

  if (!accordion) {
    notFound();
  }

  if (!fiftyFifty) {
    notFound();
  }

  if (!blocksItem) {
    notFound();
  }

  return (
    <>
      <BannerModule
        bannerTitle="Home"
        bannerImage={female_archer}
        bannerImageAlt="two archers"
      />
      <BlocksWithTextModule
        blockHeading={blocksItem.blockHeading}
        blockHeadingLight={blocksItem.blockHeadingLight}
        blockText={blocksItem.blockText}
        blockImagePrimary={blocksItem.blockImagePrimary}
        blockImagePrimaryAlt={blocksItem.blockImagePrimaryAlt}
        blockImageSecondary={blocksItem.blockImageSecondary}
        blockImageSecondaryAlt={blocksItem.blockImageSecondaryAlt}
        blockImageTertiary={blocksItem.blockImageTertiary}
        blockImageTertiaryAlt={blocksItem.blockImageTertiaryAlt}
        blockButtonLabel={blocksItem.blockButtonLabel ? blocksItem.blockButtonLabel : ""}
        blockButtonUrl={blocksItem.blockButtonUrl ? blocksItem.blockButtonUrl : ""}
      />
      <AccordionModule
        accordion={accordion}
      />
      <FiftyFiftyModule
        fiftyHeading={fiftyFifty?.fiftyHeading}
        fiftyHeadingLight={fiftyFifty?.fiftyHeadingLight}
        fiftyText={fiftyFifty?.fiftyText}
        fiftyImagePrimary={fiftyFifty?.fiftyImagePrimary}
        fiftyImagePrimaryAlt={fiftyFifty?.fiftyImagePrimaryAlt}
        fiftyButtonLabel={fiftyFifty?.fiftyButtonLabel}
        fiftyButtonUrl={fiftyFifty?.fiftyButtonUrl}
      />
    </>
  );
}