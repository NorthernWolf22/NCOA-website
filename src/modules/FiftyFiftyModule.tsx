import Image from "next/image";
import { FiftyFifty } from "@/generated/prisma/client";

//components
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx-components";
import SectionHeadingComponent from "@/components/SectionHeadingComponent";
import ButtonComponent from "@/components/ButtonComponent";

//images
import defaultFiftyImage from "../../public/images/banner-images/two_archers_frontshot.jpg";

type FiftyFiftyProps = {
    fiftyFifty: FiftyFifty | null;
    portraitImage: boolean;
    children?: React.ReactNode;
};

function FiftyFiftyModule({ fiftyFifty, portraitImage, children }: FiftyFiftyProps) {

    const fiftyFiftyModuleStyles = [
        "fiftyFiftyModule", //always applied
        portraitImage && "fiftyFiftyModule--portraitImage"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            {
                fiftyFifty ? (
                    <section className={fiftyFiftyModuleStyles}>
                        <div className="container">
                            <div className="grid">
                                <div className="col-4 sm-col-12 md-col-6">
                                    {
                                        fiftyFifty?.fiftyHeading &&
                                        <SectionHeadingComponent
                                            sectionSubHeading="// Courses"
                                            sectionHeading={fiftyFifty.fiftyHeading}
                                            sectionHeadingLight={fiftyFifty?.fiftyHeadingLight}
                                        />
                                    }
                                    {
                                        fiftyFifty?.fiftyText &&
                                        <MDXRemote source={fiftyFifty.fiftyText} components={components} />
                                    }
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
                                </div>
                                <div className="col-4 sm-col-12 md-col-7 md-start-8">
                                    <div className="fiftyFiftyModule__image-wrapper">
                                        <Image
                                            src={fiftyFifty?.fiftyImagePrimary ? fiftyFifty.fiftyImagePrimary : defaultFiftyImage}
                                            alt={fiftyFifty?.fiftyImagePrimaryAlt ? fiftyFifty.fiftyImagePrimaryAlt : "two archers aiming their bows"}
                                            fill
                                            className="fiftyFiftyModule__image"
                                        />
                                    </div>
                                    <div className="fiftyFiftyModule__image-wrapper">
                                        <Image
                                            src={fiftyFifty?.fiftyImageSecondary ? fiftyFifty.fiftyImageSecondary : defaultFiftyImage}
                                            alt={fiftyFifty?.fiftyImageSecondaryAlt ? fiftyFifty?.fiftyImageSecondaryAlt : "two archers aiming their bows"}
                                            fill
                                            className="fiftyFiftyModule__image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default FiftyFiftyModule;