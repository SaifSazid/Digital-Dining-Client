import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/slide1.jpg'
import { Link } from "react-router-dom";
const ChefRecommends = () => {
    return (
        <section className="m-4">

            <SectionTitle
                subHeading="Should Try"
                heading="Chef Recommends"
            ></SectionTitle>

            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets.</p>
                        <div className="card-actions">
                            <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 text-white uppercase">Order Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets.</p>
                        <div className="card-actions">
                            <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 text-white uppercase">Order Now</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken, Breast Fillets.</p>
                        <div className="card-actions">
                            <Link to='/order/salad'><button className="btn btn-outline border-0 border-b-4 text-white uppercase">Order Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;