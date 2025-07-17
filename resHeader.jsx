import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function ResHeader() {

    // const counter = useSelector(state => state.CartsSlice.items).length;
    const counter = useSelector(state => state.CartsSlice.count);

    return (
        <div className="flex justify-between items-center px-10 py-5 bg-[#ff5200]">
            <Link to="/"><img
                src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                alt="Swiggy Logo"
                className="rounded-2xl w-24 sm:w-32 md:w-48 cursor-pointer" />
            </Link>


            <div className="flex items-center relative group">
                <FaShoppingCart className={`text-3xl cursor-pointer ${counter > 0 ? 'text-green-600' : 'text-gray-500'}`} />

                {/* Hover Tooltip */
                    counter != 0 ?
                        <Link
                            to="/checkout"
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white text-black text-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        > checkout
                        </Link>
                        : <Link to="/checkout" className="opacity-0 " ></Link>
                }

                {counter === 0 ? (
                    <p className="ml-2 text-xl">Cart Empty !!</p>
                ) : (
                    <p className="ml-2 text-2xl text-green-600">{counter}</p>
                )}
            </div>
        </div>
    );
}
