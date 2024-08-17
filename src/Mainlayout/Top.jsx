import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const Top = () => {
    const textRef=useRef()

    const [category,setCategory] = useState("all")
    const [search,setSearch]=useState('')

    const [sort,setSort]=useState('')
    console.log(sort)

    const [currentPage, setCurrentPage] = useState(0)
    const itemPerPage = 8


    const { data = [], isLoading } = useQuery({
        queryKey: ['product', category, search, sort,currentPage, itemPerPage],
        queryFn: async () => {
            const items = await axios.get(`https://ecommarce-server-three.vercel.app/allProduct?category=${category}&search=${search}&sort=${sort}&page=${currentPage}&size=${itemPerPage}`)
            return items.data;
        }

    })

    

    console.log(data.length)
    
    const numberOfPage = Math.ceil(40 / itemPerPage);

    






    const pages = [...Array(numberOfPage).keys()]

    console.log(pages)


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }





    const handleClick=()=>{
        const text=textRef.current.value;
        setSearch(text)
    }











    return (
        <div className="my-10 md:container mx-auto">
            <h1 className="text-center text-black font-bold text-2xl">Our Product</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
                <div className="flex justify-center  pt-6 w-full col-span-2">
                    <input
                    ref={textRef}
                        type="text"
                        placeholder="Search here"
                        className="input input-bordered input-warning w-1/2 h-14 " />
                    <button onClick={handleClick} className="btn bg-[#FF7004] -ml-[100px] mt-1 text-white border-none">Search <FaArrowRight /></button>

                </div>
                <div className="flex items-center gap-2 mt-4 ">

                    <div className="dropdown dropdown-top dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#FF7004]">Sort By</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => setSort("High")}><a>Low to high Price </a></li>
                            <li onClick={() => setSort("Low")} ><a>High to Low Price</a></li>
                            <li onClick={() => setSort("New")} ><a>Newest</a></li>
                        </ul>
                    </div>

                   

                </div>
            </div>
            {/* category */}

            <div className=" flex gap-10 mt-8  justify-center">
                <h4 onClick={()=>setCategory("all")}  className={`text-xl hover:cursor-pointer font-bold ${category === 'all' && "text-[#FF7004]"}`}>All</h4>
                <h4 onClick={() => setCategory("Chair")} className={`text-xl hover:cursor-pointer font-bold ${category === 'Chair' && "text-[#FF7004]"}`}>Chair</h4>
                <h4 onClick={() => setCategory("Bedroom")} className={`text-xl hover:cursor-pointer font-bold ${category === 'Bedroom' && "text-[#FF7004]"}`}>BedRoom</h4>
                <h4 onClick={() => setCategory("Dining")} className={`text-xl hover:cursor-pointer font-bold ${category === 'Dining' && "text-[#FF7004]"}`}>Dining</h4>
                <h4 onClick={() => setCategory("Living Room")} className={`text-xl hover:cursor-pointer font-bold ${category === 'Living Room' && "text-[#FF7004]"}`}>Living</h4>

            </div>


            <div>
                {
                    isLoading && <div className="flex justify-center items-center mt-10"><h1 className="loading loading-spinner loading-lg"></h1></div>
                }
                {
                    data.length<1 && <div className="text-center animate-pulse font-extrabold text-2xl">No data..........</div>
                }
                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">


                    {
                        data.map(item => <div key={ item._id} className="card bg-base-100 w-full  shadow-xl">
                            <figure>
                                <img
                                    src={item?.image}
                                    className="h-40 w-full"
                                    alt="image" />
                            </figure>
                            <div className="p-10">
                                <h2 className="card-title">
                                    {item.product_name}
                                    
                                </h2>
                                <p><span className="font-bold">Description</span>: A flexible modern seating solution designed to adapt to the user's body and movement, providing enhanced comfort and support.</p>
                                <p>category : {item.category}</p>
                                <p>price : {item.price}$</p>
                               <div className="flex items-center gap-3">
                                    <p>Rating:</p>
                                    <div className="rating ">
                                        <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                                        <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                                        <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" />
                                        <input type="radio" name="rating-1" className="mask bg-yellow-400 mask-star" defaultChecked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>
                               </div>
                                <p>Date : {new Date(item.date).toDateString()}</p>
                               
                            </div>
                        </div>)
                    }

                  




                
                </div>
                <div className="flex justify-center  py-10 space-x-2">
                    <button onClick={handlePrev} className="btn bg-[#41b8e0]">Prev</button>

                    {
                        pages.map(page => <button onClick={() => setCurrentPage(page)} key={page} className={`btn bg-[#41b8e0] text-black ${currentPage === page && 'bg-orange-400'} `}>{page}</button>)
                    }
                    <button onClick={handleNext} className="btn bg-[#41b8e0] text-black">Next</button>
                </div>
            </div>

        </div>
    );
};

export default Top;