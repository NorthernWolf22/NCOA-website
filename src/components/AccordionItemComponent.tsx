//types
import { AccordionItem } from "@/generated/prisma/client";

//components
import IconComponent from "@/components/IconComponent";

//icons
import { faBullseye, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



type AccordionItemProps = {
    accItem: AccordionItem;
    activeId: number | null;
    toggleItem: (id: number) => void;
};

function AccordionItemComponent({ accItem, activeId, toggleItem }: AccordionItemProps) {

    const accordionStyles: string = [
        "accItem", //always applied
    ]
        .filter(Boolean)
        .join(" ");


    return (
        <div className={`${accordionStyles} ${activeId === accItem.id ? "accItem--open" : ""}`} key={accItem.id}>
            <button
                className="accItem__button" onClick={() => toggleItem(accItem.id)}
                aria-expanded={activeId === accItem.id}
                aria-controls="panel-1"
                id="accordion-1">
                
                <FontAwesomeIcon icon={faBullseye} className="accItem__icon" />

                <span>{accItem.accordionlabel}</span>

                <IconComponent iconType="decorative" iconName={faPlus} iconSize="medium" variant="secondary-unfilled" className="accItem__control accItem__control--plus" />
                <IconComponent iconType="decorative" iconName={faMinus} iconSize="medium" variant="secondary-unfilled" className="accItem__control accItem__control--minus" />
            </button>
            {
                activeId === accItem.id &&
                <div
                    className="accItem__content"
                    id="panel-1"
                    role="region"
                    aria-labelledby="accordion-1"
                    hidden={activeId !== accItem.id}
                >
                    {accItem.accordionContent}
                </div>
            }
        </div>
    );
}

export default AccordionItemComponent;