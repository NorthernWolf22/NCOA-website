import Image from "next/image";

//types
import { BlocksItem } from "@/generated/prisma/client";

//components
import SectionHeadingComponent from "@/components/SectionHeadingComponent";
import ButtonComponent from "@/components/ButtonComponent";

//images
import defaultBlockImage from "../../public/images/two_archers_in_front.jpg";

type BlocksWithTextProps = {
    blocksItem: BlocksItem | null; 
}

function BlocksWithTextModule({ blocksItem }: BlocksWithTextProps) {
    return (
        <>
            {
                blocksItem ? (
                    <div className="blocksWithTextModule">
                        <div className="container">
                            <div className="grid">
                                <div className="col-4 sm-col-5">
                                    <div className="blocksWithTextModule__image-wrapper">
                                        <Image
                                            src={blocksItem?.blockImagePrimary ? blocksItem?.blockImagePrimary : defaultBlockImage}
                                            alt={blocksItem?.blockImagePrimaryAlt ? blocksItem?.blockImagePrimaryAlt : "Two archers drawing their bows"}
                                            fill
                                            className="blocksWithTextModule__image"
                                        />
                                    </div>
                                </div>
                                <div className="col-4 sm-start-6 sm-col-7">
                                    <div className="blocks">
                                        <div className="blocks__topBlock">
                                            {
                                                blocksItem.blockHeading &&
                                                <SectionHeadingComponent
                                                    sectionSubHeading="// Coaching"
                                                    sectionHeading={blocksItem.blockHeading}
                                                    sectionHeadingLight={blocksItem.blockHeadingLight}
                                                />
                                            }
                                            {
                                                blocksItem.blockText &&
                                                <p className="body">
                                                    {blocksItem.blockText}
                                                </p>
                                            }
                                        </div>
                                        <div className="blocks__bottomBlock">
                                            <div className="blocks__image-wrapper">
                                                <Image
                                                    src={blocksItem?.blockImageSecondary ? blocksItem?.blockImageSecondary : defaultBlockImage}
                                                    alt={blocksItem?.blockImageSecondaryAlt ? blocksItem?.blockImageSecondaryAlt : "Two archers drawing bows"}
                                                    fill
                                                    className="blocks__image"
                                                />
                                            </div>
                                            <div className="blocks__image-wrapper">
                                                <Image
                                                    src={blocksItem?.blockImageTertiary ? blocksItem?.blockImageTertiary : defaultBlockImage}
                                                    alt={blocksItem?.blockImageTertiaryAlt ? blocksItem?.blockImageTertiaryAlt : "Two archers drawing bows"}
                                                    fill
                                                    className="blocks__image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 sm-col-12">
                                    {
                                        (blocksItem?.blockButtonUrl || blocksItem?.blockButtonLabel) &&
                                        <ButtonComponent
                                            buttonType="link"
                                            href={blocksItem?.blockButtonUrl}
                                            variant="primary"
                                        >{blocksItem?.blockButtonLabel}</ButtonComponent>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    );
}

export default BlocksWithTextModule;