import { FaArrowRight } from "react-icons/fa";


const Headers = () => {
    return (
        <div
            className="hero h-[600px] "
            style={{
                backgroundImage: "url(https://furns-react.netlify.app/images/slider-image/slider-2-1.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h4 className="capitalize text-white text-xl">new Products</h4>
                    <h1 className="mb-5 text-5xl font-bold">Flexible Chair</h1>
                    <p className="mb-5">
                        A flexible chair is a modern seating solution designed to adapt to the user&apos;s body and movement, providing enhanced comfort and support. 
                    </p>
                    <button className="btn bg-[#FF7004] text-white border-none">Get Started <FaArrowRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Headers;