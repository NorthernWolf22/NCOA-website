"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

//types & services
import { ModalComponentState } from "./modal/ModalComponent.types";
import { Links, LinkItem } from "@/generated/prisma/client";

//components
import LogoComponent from "./LogoComponent";
import LinkComponent from "./LinkComponent";
import ButtonComponent from "./ButtonComponent";
import ModalComponent from "./modal/ModalComponent";
import IconComponent from "./IconComponent";

//images & icons
import logo from "../../public/images/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type HeadComponentProps = {
    links: (Links & { items: LinkItem[] })[];
};

function HeaderComponent({ links }: HeadComponentProps) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [modal, setModal] =useState<ModalComponentState>({
        isOpen: false,
        status: "info",
        title: "",
        text: ""
    });

    const toggleMenu = () => setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);

    //When menu is open this prevents users scrolling
    useEffect(() => {
        const root = document.body;

        if (isNavOpen || modal.isOpen) {
            root.classList.add("no-scroll");
        } else {
            root.classList.remove("no-scroll");
        }

        // Cleanup on unmount
        return () => root.classList.remove("no-scroll");
    }, [isNavOpen, modal.isOpen]);

    //Ensures menu closes whenever the user clicks a menu option to navigate to a new page
    useEffect(() => {
        setIsNavOpen(false);
    }, [pathname]);

    const toggleModal = () => {
        setModal((prevModal) => {
            return {
                ...prevModal,
                isOpen: !prevModal.isOpen,
                status: (prevModal.status === "error" || prevModal.status === "success") ? "info" : "info",
                title: prevModal.title.length === 0 ? "Announcement" : "",
                text: prevModal.text.length === 0 ? "Log in and sign up functionality coming soon" : ""
            }
        });
    };

    return (
        <>
            <header className={isNavOpen ? "headerComponent headerComponent--isOpen" : "headerComponent"}>
                <div className="container">
                    <div className="headerComponent__inner">
                        <LogoComponent
                            logoImage={logo}
                            logoImageAlt="Geometric logo shape"
                        />

                        <IconComponent
                            iconType="button"
                            iconName={faBars}
                            iconSize="large"
                            variant="primary"
                            onClick={toggleMenu}
                            className="headerComponent__inner-menu"
                        />

                        <div id="header-links" className="headerComponent__links">
                            <nav className="nav">
                                {
                                    links?.map((column) => (
                                        <div key={column.id} className="navColumn">
                                            {
                                                column?.items.map((link) => (
                                                    <LinkComponent 
                                                        key={link.id}
                                                        linkType="link" 
                                                        href={link.linkUrl} 
                                                    >
                                                        {link.linkLabel}
                                                    </LinkComponent>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </nav>
                            <div className="headerComponent__block">
                                <LinkComponent
                                    linkType="button"
                                    onClick={toggleModal}
                                >
                                    Log in
                                </LinkComponent>
                                <ButtonComponent
                                    buttonType="button"
                                    variant="primary"
                                >
                                    Sign up
                                </ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <ModalComponent
                {...modal}
                onClose={toggleModal}>
            </ModalComponent>
        </>
    );
}

export default HeaderComponent;