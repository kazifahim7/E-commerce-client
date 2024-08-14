import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const Top = () => {

    const [category] = useState("all")



    return (
        <div className="my-10 md:container mx-auto">
            <h1 className="text-center text-black font-bold text-2xl">Our Product</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
                <div className="flex justify-center  pt-6 w-full col-span-2">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-warning w-1/2 h-14 " />
                    <button className="btn bg-[#FF7004] -ml-[100px] mt-1 text-white border-none">Search <FaArrowRight /></button>

                </div>
                <div className="flex items-center gap-2 mt-4 ">

                    <h1 className="font-bold ">Sort by</h1>
                    <select className="select select-warning w-full h-14 max-w-xs">
                        <option disabled selected>select one....</option>
                        <option>Cheese</option>
                        <option>Veggie</option>
                        <option>Pepperoni</option>
                        <option>Margherita</option>
                        <option>Hawaiian</option>
                    </select>

                </div>
            </div>
            {/* category */}

            <div className=" flex gap-10 mt-8  justify-center">
                <h4 className={`text-xl font-bold ${category === 'all' && "text-[#FF7004]"}`}>All</h4>
                <h4 className="text-xl font-bold">Chair</h4>
                <h4 className="text-xl font-bold">BedRoom</h4>
                <h4 className="text-xl font-bold">Dining</h4>

            </div>

        </div>
    );
};

export default Top;