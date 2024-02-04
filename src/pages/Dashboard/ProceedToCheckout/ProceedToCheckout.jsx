import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const ProceedToCheckout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard/payment";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       console.log(data)
       
       navigate(from, {replace: true})
    };
     console.log(errors);

    return (

        <div className='w-2/3 border border-yellow-500 p-10'>
            <SectionTitle subHeading="place your" heading="Order"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='flex gap-4 py-2 '>
                    <label className='form-control w-1/2'>
                        <div className="label">
                            <span className="label-text">Name</span>

                        </div>
                        <input type="text" placeholder="Name" {...register("Name", { required: true })} />
                    </label>
                    <label className='form-control  w-1/2'>
                        <div className="label">
                            <span className="label-text">Phone Number</span>

                        </div>
                        <input type="number" placeholder="Phone Number" {...register("Phone Number", { required: true, min: 11})} />
                    </label>
                </div>

                <div className='flex gap-4 oy-2'>
                    <label className='form-control w-1/2'>
                        <div className="label">
                            <span className="label-text">Email</span>

                        </div>
                        <input type="email" placeholder="Email" {...register} />
                    </label>


                    <label className='form-control w-1/2'>
                        <div className="label">
                            <span className="label-text">Full Address</span>

                        </div>
                        <textarea {...register("Full Address", { required: true })} />
                    </label>
                </div>

                <div className="flex gap-4">
                    <label className='form-control w-1/2'>
                        <div className="label">
                            <span className="label-text">City</span>

                        </div>
                        <input type="text" placeholder="City" {...register("City", {})} />
                    </label>

                    <label className='form-control w-1/2'>
                        <div className="label">
                            <span className="label-text">Postcode</span>

                        </div>
                        <input type="text" placeholder="Postcode/ZIP" {...register("Postcode/ZIP", { required: true })} />

                    </label>
                </div>
                <input className='btn btn-sm mt-4' type="submit" value="Place order" />
            </form>
           
        </div>




    );
};

export default ProceedToCheckout;