import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import backgroundImage from "../../assets/bg.jpeg"

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure()


    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const logggedUser = result.user
                console.log(logggedUser);
                navigate('/');
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email }
                        axiosSecure.post('/users', savedUser)

                            .then(data => {
                                if (data.insertedData) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });

                                }
                            })




                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: { error },
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    })
            })
    }



    return (
        <>
            <Helmet>
                <title>Digital Dinning | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse " style={{
                    backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-yellow-500">Sign up now!</h1>
                        <p className="py-6">Nestled in the heart of the city, <span className='text-xl text-yellow-500'>Digital Dininig</span> is a culinary heaven that delights in offering a diverse gastronomic experience. To enjoy this,</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" name="name" className="input input-bordered border-yellow-500" required />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered border-yellow-500" required />
                                {
                                    errors.photoURL &&
                                    <span className="text-red-600">Photo URL is required</span>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-yellow-500" required />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" name="password" className="input input-bordered border-yellow-500" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be between 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one uppercase, one lowercase, one number and one special character</p>
                                )}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className="pl-8"><small>Already have an account<Link to='/login' className="text-yellow-500 font-bold"> Login!</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;