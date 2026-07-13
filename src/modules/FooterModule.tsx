//services
import { LinkItem, Links } from "@/generated/prisma/client";

//components
import LogoComponent from "@/components/LogoComponent";

//images
import logo from "../../public/images/logo.svg";
import LinkComponent from "@/components/LinkComponent";

type FooterModuleProps = {
    footerLinks: (Links & { items: LinkItem[] })[];
    footerPolicyLinks: (Links & { items: LinkItem[] })[];
};

function FooterModule({ footerLinks, footerPolicyLinks }: FooterModuleProps) {

    return (
        <footer className="footerModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-col-6">
                        <div className="footerModule__leftBlock">
                            <nav className="nav">
                                {
                                    footerLinks?.map((column) => (
                                        <div key={column.id} className="navColumn">
                                            {
                                                column.columnTitleLink ? (
                                                    <LinkComponent
                                                        linkType="link"
                                                        href={column.columnTitleUrl ? column.columnTitleUrl : ""}
                                                        variant="heavy"
                                                    >
                                                        {column.columnTitle}
                                                    </LinkComponent>
                                                ) : (
                                                    <div className="link link--heavy link--noHover">
                                                        {column.columnTitle}
                                                    </div>
                                                )
                                            }
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
                        </div>
                    </div>
                    <div className="col-4 sm-col-6">
                        <div className="footerModule__rightBlock">
                            <LogoComponent logoImage={logo} logoImageAlt="geometric logo shape" />
                            <p className="body body--small">18 Hawthorne road, New Brighton, <br /> BR85 6TW</p>
                        </div>
                    </div>
                    <div className="col-4 sm-col-12">
                        <div className="footerModule__bottomBlock">
                            <p className="body body--small">Web design copyright C E Knight</p>
                            <div className="footerModule__bottomBlock-links">
                                <nav className="nav">
                                    {
                                        footerPolicyLinks?.map((column) => (
                                            <div key={column.id} className="navColumn">
                                                {
                                                    column.columnTitleLink ? (
                                                        <LinkComponent
                                                            linkType="link"
                                                            href={column.columnTitleUrl ? column.columnTitleUrl : ""}
                                                            variant="heavy"
                                                        >
                                                            {column.columnTitle}
                                                        </LinkComponent>
                                                    ) : (
                                                        <></>
                                                    )
                                                }
                                                {
                                                    column.items?.map((link) => (
                                                        <LinkComponent
                                                            key={link.id}
                                                            linkType="link"
                                                            href={link.linkUrl}
                                                            variant="heavy"
                                                        >
                                                            {link.linkLabel}
                                                        </LinkComponent>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterModule;