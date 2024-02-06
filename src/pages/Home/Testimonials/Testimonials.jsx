import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { MdOutlineReviews } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";


const Testimonials = () => {
    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])
    const {data: reviews=[]} = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await fetch('https://dgitial-dining-server.onrender.com//reviews');
            return res.json();
        }
    })
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="what our client say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                           <div className="w-100 py-18 pt-10">
                           <MdOutlineReviews size="7em" />
                           </div>
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
