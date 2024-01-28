import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const PostReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='w-full'>
            <SectionTitle subHeading="Post" heading="Review"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full mb-4">
                    <div className="label">
                        <span className="label-text font-semibold">Your Name</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full"  {...register("name", { required: true, maxLength: 120 })} />

                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Review Details</span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Review Details"></textarea>
                </label>

                <label className='form-control max-w-xs my-4'>
                    <div className="label">
                        <span className="label-text">Rating</span>
                    </div>
                    <input type="number" placeholder="Rating" {...register("Rating", {  max: 5, min: 1})} />
                </label>
                <input className='btn btn-sm mt-4' type="submit" value="Post" />
            </form>
        </div>
    );
};

export default PostReview;