import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PostReview = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { name, details, rating } = data;
        const newReview = { name, details, rating: parseInt(rating) };
        console.log(newReview);
        axiosSecure.post('/reviews', newReview)
            .then(data => {
                console.log('after posting new review', data.data)
                if (data.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Posted succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className='w-full'>
            <SectionTitle subHeading="Post" heading="Review"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </div>
                    <input type="text" placeholder="name" className="input input-bordered w-full"  {...register("name", { required: true, maxLength: 120 })} />

                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Review Details</span>
                    </div>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Review Details"></textarea>
                </label>

                <label className='form-control max-w-xs my-4'>
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <input type="number" placeholder="rating" {...register("rating", { max: 5, min: 1 })} />
                </label>
                <input className='btn btn-sm mt-4' type="submit" value="Post" />
            </form>
        </div>
    );
};

export default PostReview;