import { FaMapMarkerAlt, FaSearch, FaArrowRight } from "react-icons/fa";
import {Link} from "react-router";

const Header = () => {
    return (
        <div className="bg-[#ff5200] font-serif relative overflow-hidden">

            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <img
                    src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                    alt="Swiggy Logo"
                    className="rounded-2xl w-24 sm:w-32 md:w-48"
                />
                <div className="hidden md:flex items-center gap-6 text-white font-bold text-base">
                    <a href="#">Swiggy Corporate</a>
                    <a href="#">Partner With Us</a>
                    <a
                        href="#get-app-section"
                        className="flex items-center gap-2 border p-3 rounded-2xl group transition-all duration-200"
                    >
                        <span className="text-base">Get The App</span>
                        <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 group-hover:scale-125 transition-all duration-200" />
                    </a>
                    <button className="bg-black px-4 py-2 rounded-xl hover:bg-gray-700 cursor-pointer">
                        Sign in
                    </button>
                </div>
            </div>

            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                className="absolute left-0 hidden md:block"
                height="420"
                width="230"
                alt="Left Decoration"
            />
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                className="absolute right-0 hidden md:block"
                height="420"
                width="230"
                alt="Right Decoration"
            />

            <div className="pt-16 pb-8 px-4">
                <div className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center max-w-full sm:max-w-[80%] md:max-w-[60%] mx-auto">
                    Order Food & Groceries. Discover best Restaurants. Swiggy it!
                </div>

                <div className="max-w-[95%] sm:max-w-[80%] md:max-w-[60%] mx-auto flex flex-col sm:flex-row items-center gap-4 py-4 mt-6">
                    <div className="flex items-center w-full sm:w-1/3 bg-white px-3 py-2 rounded-lg">
                        <FaMapMarkerAlt className="text-red-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Delhi, India"
                            className="bg-transparent focus:outline-none w-full"
                        />
                    </div>
                    <div className="flex items-center bg-white px-3 py-2 rounded-lg w-full">
                        <FaSearch className="text-gray-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Search for restaurants, Items and more..."
                            className="bg-transparent focus:outline-none w-full"
                        />
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap justify-center gap-6 p-4">

                <Link to={"/restaurant"} className="block hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" className="h-[290px] w-auto rounded-2xl object-cover"></img>
                </Link>
                <a 
                    href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"  target="_blank"
                    className="block hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden" >
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
                        className="h-[290px] w-auto rounded-2xl object-cover"
                    />
                </a>

                <a 
                    href="https://www.swiggy.com/dineout"  target="_blank"
                    className="block hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden" >
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
                        className="h-[290px] w-auto rounded-2xl object-cover"
                    />
                </a>
                
            </div>
        </div>
    );
};

export default Header;
