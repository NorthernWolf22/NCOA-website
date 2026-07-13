//components
import { MDXRemote } from "next-mdx-remote/rsc";
import { components } from "@/components/mdx-components";
import Image from "next/image";
import SectionHeadingComponent from "@/components/SectionHeadingComponent";
import ButtonComponent from "@/components/ButtonComponent";

type FiftyFiftyProps = {
    fiftyText: string;
    fiftyHeading: string;
    fiftyHeadingLight: string;
    fiftyImagePrimary: string;
    fiftyImagePrimaryAlt: string;
    fiftyImageSecondary?: string | null;
    fiftyImageSecondaryAlt?: string | null;
    fiftyButtonUrl?: string | null;
    fiftyButtonLabel?: string | null;
    portraitImage?: boolean;
    children?: React.ReactNode;
};

function FiftyFiftyModule({ fiftyHeading, fiftyHeadingLight, fiftyText, fiftyImagePrimary, fiftyImageSecondary, fiftyImagePrimaryAlt, fiftyImageSecondaryAlt, fiftyButtonUrl, fiftyButtonLabel, portraitImage }: FiftyFiftyProps) {

    const fiftyFiftyModuleStyles = [
        "fiftyFiftyModule", //always applied
        portraitImage && "fiftyFiftyModule--portraitImage"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section className={fiftyFiftyModuleStyles}>
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-12 md-col-6">
                        <SectionHeadingComponent
                            sectionSubHeading="// Courses"
                            sectionHeading={fiftyHeading}
                            sectionHeadingLight={fiftyHeadingLight}

                        />
                        <MDXRemote source={fiftyText ?? "<p className='body'>Opps, somethings gone wrong, we are working on resolving this issue. Thank you for your patience</p>"} components={components} />
                        {
                            fiftyButtonUrl &&
                            <ButtonComponent
                                href="/contact-us"
                                buttonType="link"
                                variant="primary"
                            >
                                {fiftyButtonLabel}
                            </ButtonComponent>
                        }
                    </div>
                    <div className="col-4 sm-col-12 md-col-7 md-start-8">
                        <div className="fiftyFiftyModule__image-wrapper">
                            <Image
                                src={fiftyImagePrimary}
                                alt={fiftyImagePrimaryAlt}
                                fill
                                className="fiftyFiftyModule__image"
                            />

                        </div>
                        {
                            fiftyImageSecondary &&
                            <div className="fiftyFiftyModule__image-wrapper">
                                <Image
                                    src={fiftyImageSecondary}
                                    alt={fiftyImageSecondaryAlt ? fiftyImageSecondaryAlt : ""}
                                    fill
                                    className="fiftyFiftyModule__image"
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FiftyFiftyModule;