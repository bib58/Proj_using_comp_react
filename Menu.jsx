import { useParams, Link } from "react-router";
import { Restaurants } from "./in_3";
import { Dishes } from "./in_4";
import Menucard from "./Menucard";
import { useState } from "react";
import { FaSearch} from "react-icons/fa";

export default function Menu() {
    const { id } = useParams();
    const restaurant = Restaurants.find(res => String(res.id) === id);

    const [sel, setsel] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");


    if (!restaurant) {
        return <h2 className="text-center text-xl mt-10 text-gray-600">Restaurant not found</h2>;
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#e0f7fa] via-[#fff3e0] to-[#fce4ec] ">
            <div className=" flex justify-center items-start py-12 w-[80%] mx-auto px-4">
                <div className="max-w-4xl mx-auto px-4 py-8 w-full">
                    <nav className="text-[18px] mb-4 space-x-1 text-black font-medium">
                        <Link to="/" className="hover:underline text-black">Home</Link>
                        <span>&gt;</span>
                        <span>&gt;</span>
                        <span>{restaurant.name}</span>
                    </nav>

                    <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>

                    <div className="rounded-2xl border-3 border-gray-200 p-6 shadow-sm bg-white">
                        <span className="text-green-600 font-bold text-2xl">⭐ {restaurant.avgRating} ratings</span>
                        <div className="text-orange-600 font-medium text-2xl mb-8 mt-4">{restaurant.cuisines.join(", ")}</div>
                        <span className="text-black text-2xl">📍{restaurant.locality}</span>
                    </div>
                </div>
            </div>

            <div className="w-[90%] flex items-center gap-4 my-6 mx-auto">
                <div className="flex-1 h-[2px] bg-orange-400"></div>
                <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full font-bold text-[20px] shadow">Menu</span>
                <div className="flex-1 h-[2px] bg-orange-400"></div>
            </div>


            <div className="w-[70%] mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex gap-4">
                        <button
                            className={`border-2 px-6 py-1 cursor-pointer rounded-2xl font-medium ${(sel === 'veg' ? "bg-green-400" : "bg-transparent")}`}
                            onClick={() => setsel(sel === 'veg' ? null : `veg`)}
                        >Veg</button>

                        <button
                            className={`border-2 px-6 py-1 cursor-pointer font-medium rounded-2xl ${(sel === 'nonveg' ? "bg-red-400" : "bg-transparent")}`}
                            onClick={() => setsel(sel === 'nonveg' ? null : `nonveg`)}
                        >Non-Veg</button>
                    </div>

                    <div className="flex items-center bg-gray-200 px-3 py-2 rounded-2xl w-[70%]">
                        <FaSearch className="text-gray-600 mr-2" />
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            className="flex-1 p-2 rounded outline-none min-w-[200px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                </div>
            </div>


            <div className="w-[70%] mx-auto">

                {
                    Dishes.map((menuItems) => <Menucard key={menuItems.title} menuItems={menuItems} sel={sel} searchQuery={searchQuery} />)
                }
            </div>

            <div className="h-[10] w-full"></div>
        </div>
    );
}
