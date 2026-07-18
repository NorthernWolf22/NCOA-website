
//components
import ButtonComponent from "@/components/ButtonComponent";
import LinkComponent from "@/components/LinkComponent";

function NotFound() {
    return ( 
        <section className="notFoundModule">
            <div className="container">
                <div className="grid">
                    <div className="col-4 sm-start-4 sm-col-6">
                        <div className="notFoundModule__inner">
                            <div className="h4 center">Opps!</div>
                            <p className="body">
                                Something has gone wrong, if this problem persist please contact our admin team on <LinkComponent
                                    href="tel:+441513381800"
                                    linkType="link"
                                    variant="heavy"
                                >
                                    0151 338 1800
                                </LinkComponent>
                                . 
                            </p>
                            <ButtonComponent
                                href="/"
                                buttonType="link"
                                variant="secondary"
                            >
                                Back to home
                            </ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default NotFound;