
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center space-y-2 my-10">
            <p className="text-yellow-600 italic">--- {subHeading} ---</p>

            <h3 className="max-w-fit mx-auto px-8 border-y-[3px] py-2 text-3xl uppercase font-semibold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;