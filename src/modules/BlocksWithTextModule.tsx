import Image from "next/image";

//types
import { BlocksItem } from "@/generated/prisma/client";

//components
import SectionHeadingComponent from "@/components/SectionHeadingComponent";

//images
import ButtonComponent from "@/components/ButtonComponent";

// type BlocksWithTextProps = {
//     blockHeading: string;
//     blockHeadingLight: string;
//     blockText: string;
//     blockImagePrimary: string;
//     blockImagePrimaryAlt: string;
//     blockImageSecondary: string;
//     blockImageSecondaryAlt: string;
//     blockImageTertiary: string;
//     blockImageTertiaryAlt: string;
//     blockButtonLabel: string;
//     blockButtonUrl: string;
// }

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
                                            src={blocksItem?.blockImagePrimary}
                                            alt={blocksItem?.blockImagePrimaryAlt}
                                            fill
                                            className="blocksWithTextModule__image"
                                        />
                                    </div>
                                </div>
                                <div className="col-4 sm-start-6 sm-col-7">
                                    <div className="blocks">
                                        <div className="blocks__topBlock">
                                            <SectionHeadingComponent
                                                sectionSubHeading="// Coaching"
                                                sectionHeading={blocksItem?.blockHeading}
                                                sectionHeadingLight={blocksItem?.blockHeadingLight}
                                            />
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
                                                    src={blocksItem?.blockImageSecondary}
                                                    alt={blocksItem?.blockImageSecondaryAlt}
                                                    fill
                                                    className="blocks__image"
                                                />
                                            </div>
                                            <div className="blocks__image-wrapper">
                                                <Image
                                                    src={blocksItem?.blockImageTertiary}
                                                    alt={blocksItem?.blockImageTertiaryAlt}
                                                    fill
                                                    className="blocks__image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 sm-col-12">
                                    <ButtonComponent
                                        buttonType="link"
                                        href={blocksItem?.blockButtonUrl}
                                        variant="primary"
                                    >{blocksItem?.blockButtonLabel}</ButtonComponent>
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