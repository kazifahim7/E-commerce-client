import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const LogIn = () => {

    const { googleLogIN, LogIn,loading }=useContext(AuthContext)

    const navigate = useNavigate()
    const location=useLocation()
    

    const handleSubmit = (e) => {
        e.preventDefault()

        
        const email = e.target.email.value;
        const password = e.target.password.value;

        

        LogIn(email, password)
            .then(data => {
                if (data.user) {
                    
                    toast.success('Successfully logIn')
                    navigate(location.state?location.state : '/home')
                    e.target.reset()




                }
            })
            .catch((error) => toast.error(`${error.message}`))








    }

    const gooleLog = () => {   
        googleLogIN()
            .then(data => {
                if (data.user) {
                   
                    navigate(location.state ? location.state : '/home')
                    toast.success('Successfully logIn')
                    navigate('/home')





                }

            })
            .catch((error) => {
               


                toast.error(`${error.message}`)
            })

    }












    return (
        <div>
            <section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                        <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                            <h2 className="text-3xl flex items-center gap-5  font-bold leading-tight text-black sm:text-4xl">
                                <h1> Sign in to</h1>
                                <div className="pt-3">
                                    <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" className="w-28" />
                                </div>
                            </h2>
                            <p className="mt-2 text-base text-gray-600">
                                Don’t have an account?{" "}
                                <Link
                                    to={'/signUp'}
                                    
                                    title=""
                                    className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                                >
                                    Create a free account
                                </Link>
                            </p>

                            <form onSubmit={handleSubmit} method="POST" className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter email to get started"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-base font-medium text-gray-900">
                                                Password
                                            </label>

                                          
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                            name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className={` ${loading && "animate-pulse"} inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#FF7004] border border-transparent rounded-md focus:outline-none hover:bg-[#FF7004]focus:bg-blue-700`}
                                        >
                                            {
                                                loading ? "loading....." : "sign In"
                                            }

                                        </button>
                                        <Toaster></Toaster>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                onClick={gooleLog}
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg
                                            className="w-6 h-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>

                               
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
                        <div>
                            <img
                                className="w-full mx-auto"
                                src="https://furns-react.netlify.app/images/slider-image/slider-2.png"
                                alt=""
                            />

                            <div className="w-full max-w-md mx-auto xl:max-w-xl">
                                <h3 className="text-2xl font-bold text-center text-black">
                                    Buy more....
                                </h3>
                                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                                    A flexible chair is a modern seating solution designed to adapt to the users body and movement, providing enhanced comfort and support.
                                </p>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        
        </div>
    );
};

export default LogIn;