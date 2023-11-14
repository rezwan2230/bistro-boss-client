import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import '../../Home/Featured/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-12  pb-16 text-white">
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'>
            </SectionTitle>

            <div className="md:flex justify-center items-center gap-10 py-8 px-16 ">
                <div className="">
                    <img className="w-[448px] h-[300px]" src={featuredImg} alt="" />
                </div>
                <div className="w-96 space-y-2 ">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="btn btn-outline rounded-md font-semibold text-white border-0 border-b-[3px] hover:bg-white hover:text-black">Read More</button>
                </div>
            </div>


        </div>
    );
};

export default Featured;