import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
// import backgroundImage from '../../assets/loginbackground.png'
import backgroundImage from '../../assets/Lbg.jpg';
import { Alert } from "@material-tailwind/react";
const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                <Alert color="green">User Login succesful.</Alert>
                // Swal.fire({
                //     title: "User Login succesful",
                //     showClass: {
                //         popup: `
                //         animate__animated
                //         animate__fadeInUp
                //         animate__faster
                //       `
                //     },
                //     hideClass: {
                //         popup: `
                //         animate__animated
                //         animate__fadeOutDown
                //         animate__faster
                //       `
                //     }
                // });
                navigate(from, { replace: true })
            }) // const handleValidateCaptcha = (e) => {
        //     const user_captcha_value = e.target.value;
        //     if (validateCaptcha(user_captcha_value)) {
        //         setDisabled(false);
        //     }
        //     else {
        //         setDisabled(true);
        //     }

        // }
    }



    return (
        <>

            <Helmet>
                <title>Digital Dinning | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-500 "  style={{
                    backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
            
                }}>
                <div className="hero-content flex-col md:flex-row-reverse " >
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl text-yellow-500 font-bold">Login now!</h1>
                        <p className="py-6">Nestled in the heart of the city, <span className='text-xl text-yellow-500'>Digital Dininig</span> is a culinary heaven that delights in offering a diverse gastronomic experience. To enjoy this,</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-4xl bg-transparent " >
                        <form className="card-body" onSubmit={handleLogin} >
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border-yellow-400" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered border-yellow-400" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">

                                {/* <input onBlur={ handleValidateCaptcha } type="text" name="captcha" placeholder="type the captcha" className="input input-bordered" required /> */}

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-warning" type="submit" value="Login" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup" className='text-yellow-500 font-bold'>Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;