type SectionHeadingProps = {
    sectionSubHeading: string;
    sectionHeading: string;
    sectionHeadingLight: string;
};

function SectionHeadingComponent({sectionSubHeading, sectionHeading, sectionHeadingLight}: SectionHeadingProps) {
    return ( 
        <div className="sectionHeading">
            <div className="body body--large body--coloured">{sectionSubHeading}</div>
            <div className="h5">{sectionHeading} <span className="sectionHeading__light">{sectionHeadingLight}</span></div>
        </div>
     );
}

export default SectionHeadingComponent;