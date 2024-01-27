import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle
                subHeading='check it out'
                heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center  bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora officiis quidem dolor, facere eveniet rerum mollitia tempore dignissimos totam molestiae, nam obcaecati dolorum repudiandae aperiam ipsum. Odio unde ex architecto.5</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;