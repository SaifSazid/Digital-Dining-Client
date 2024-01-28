import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const Reaservations = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='w-full'>
            <SectionTitle subHeading="book your" heading="Reaservations"></SectionTitle>
            <form className='mx-4' onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-1/3">
                        <div className="label">
                            <span className="label-text">Number Of People</span>

                        </div>
                        <select defaultValue="Number of People" {...register("people", { required: true })} className="select select-bordered">
                            <option disabled >Number of People</option>
                            <option>1 Person</option>
                            <option>2 People</option>
                            <option>3 People</option>
                            <option>4 People</option>
                            <option>5 People</option>
                            <option>5+ People</option>
                        </select>
                    </label>
                
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Mobile Number</span>
                    </div>
                    <input type="tel" placeholder="Mobile number" className="file-input file-input-bordered w-1/3" {...register("Mobile number", {required: true, minLength: 11, maxLength: 11})} />
                </label>

                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text">Date and Time</span>
                    </div>
                    <input className="file-input file-input-bordered w-1/3" type="datetime-local" placeholder="Date" {...register("Date", {})} />
                </label>
                <input className='btn btn-sm mt-4' type="submit" value="Book Now" />

            </form>
        </div>
    );
};

export default Reaservations;