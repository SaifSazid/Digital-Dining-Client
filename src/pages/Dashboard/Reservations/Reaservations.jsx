import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const Reaservations = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}= useAuth();
    const [axiosSecure] = useAxiosSecure();
    const onSubmit = data => {
         const { people, number, date,email, time } = data
         const reservationDetails ={people:people, number:number, date:date, email:email, time:time}
        

        
        axiosSecure.post('/reservations', reservationDetails)
            .then(data => {
                console.log('after posting new review', data.data)
                if (data.data.insertedId) {
                    reset(); 
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your table has been booked",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })



    };
 
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
                    <input type="tel" placeholder="number" className="file-input file-input-bordered w-1/3" {...register("number", { required: true, minLength: 11, maxLength: 11 })} />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" placeholder="email" className="file-input file-input-bordered w-1/3" {...register("email", { required: true})} />
                </label>

                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text">Time</span>
                    </div>
                    <input className="file-input file-input-bordered w-1/3" type="time" placeholder="Time" {...register("time", {})} />
                </label>

                <label className="form-control w-full my-4">
                    <div className="label">
                        <span className="label-text">Date</span>
                    </div>
                    <input className="file-input file-input-bordered w-1/3" type="date" placeholder="Date" {...register("date", {})} />
                </label>

                <input className='btn btn-sm mt-4' type="submit" value="Book Now" />

            </form>
        </div>
    );
};

export default Reaservations;