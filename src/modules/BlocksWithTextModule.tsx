import Image from "next/image";

//components
import SectionHeadingComponent from "@/components/SectionHeadingComponent";

//images
import ButtonComponent from "@/components/ButtonComponent";

type BlocksWithTextProps = {
    blockHeading: string;
    blockHeadingLight: string;
    blockText: string;
    blockImagePrimary: string;
    blockImagePrimaryAlt: string;
    blockImageSecondary: string;
    blockImageSecondaryAlt: string;
    blockImageTertiary: string;
    blockImageTertiaryAlt: string;
    blockButtonLabel: string;
    blockButtonUrl: string;
}

function BlocksWithTextModule({ blockHeading, blockHeadingLight, blockText, blockImagePrimary, blockImagePrimaryAlt, blockImageSecondary, blockImageSecondaryAlt, blockImageTertiary, blockImageTertiaryAlt, blockButtonLabel, blockButtonUrl }: BlocksWithTextProps) {
    return (
        <div className="blocksWithTextModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-5">
                        <div className="blocksWithTextModule__image-wrapper">
                            <Image
                                src={blockImagePrimary}
                                alt={blockImagePrimaryAlt}
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
                                    sectionHeading={blockHeading}
                                    sectionHeadingLight={blockHeadingLight}
                                />
                                <p className="body">
                                    {blockText}
                                </p>
                            </div>
                            <div className="blocks__bottomBlock">
                                <div className="blocks__image-wrapper">
                                    <Image
                                        src={blockImageSecondary}
                                        alt={blockImageSecondaryAlt}
                                        fill
                                        className="blocks__image"
                                    />
                                </div>
                                <div className="blocks__image-wrapper">
                                    <Image
                                        src={blockImageTertiary}
                                        alt={blockImageTertiaryAlt}
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
                            href={blockButtonUrl}
                            variant="primary"
                        >{blockButtonLabel}</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlocksWithTextModule;