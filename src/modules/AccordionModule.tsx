"use client"

import { useState } from "react";

//types
import { Accordion, AccordionItem } from "@/generated/prisma/client";

// //components
import AccordionItemComponent from "@/components/AccordionItemComponent";
import SectionHeadingComponent from "@/components/SectionHeadingComponent";


type AccordionModuleProps = {
    accordion: Accordion & {
        items: AccordionItem[];
    } | null;
}

function AccordionModule({ accordion }: AccordionModuleProps) {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleItem = (id: number): void => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <>
            {
                accordion ? (
                    <section className="accordionModule">
                        <div className="container">
                            <div className="grid">
                                <div className="col-4 sm-col-6">
                                    {
                                        accordion.title &&
                                        <SectionHeadingComponent
                                            sectionSubHeading="// FAQs"
                                            sectionHeading={accordion.title}
                                            sectionHeadingLight={accordion?.titleLight}
                                        />
                                    }
                                </div>
                                <div className="col-4 sm-col-6 sm-start-7">
                                    <div className="acc-cont">
                                        {
                                            accordion.items?.map((accItem) => (
                                                (accItem.accordionlabel && accItem.accordionContent) ? (
                                                    <AccordionItemComponent
                                                        key={accItem.id}
                                                        accItem={accItem}
                                                        activeId={activeId}
                                                        toggleItem={toggleItem}
                                                    />
                                                ) : (
                                                    <></>
                                                )
                                            ))
                                        }
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

export default AccordionModule;