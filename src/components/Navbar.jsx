import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const { logOut }=useContext(AuthContext)

    const navigate=useNavigate()

    const singOut=()=>{
        logOut()
        .then(()=>{
            
            
            toast.success("logOut success")})

            navigate("/")
            .catch(error=>toast.error(`${error.message}`))

    }
    return (
        <div>
            <div className="navbar bg-[#ffffff] text-black px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#product">product</a></li>
                           
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <img src="https://furns-react.netlify.app/_next/image?url=%2Fimages%2Flogo%2Flogo.png&w=1920&q=75" alt="" />
                </div>
                <div className="navbar-end">
                   
                    <button onClick={singOut} className="btn bg-[#FF7004] text-white border-none">LogOut<FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;