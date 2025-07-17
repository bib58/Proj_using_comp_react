import { useState } from "react";
import Menuinfo from "./Menuinfo";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; 

export default function Menucard({ menuItems, sel, searchQuery }) {
    const [isOpen, setOpen] = useState(true);

    let filteredItems = menuItems.itemCards;

    if (sel === 'veg') {
        filteredItems = menuItems.itemCards.filter(item => item.isVeg == 1);
    } else if (sel === 'nonveg') {
        filteredItems = menuItems.itemCards.filter(item => item.isVeg == 0);
    }

    const finalFilteredItems = filteredItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const finalFilteredItems = useIncrementalSearch(menuItems, searchQuery);

    return (
        <div className="w-full my-6">
            <div className="flex items-center justify-between cursor-pointer p-2" onClick={() => setOpen(!isOpen)}>
                <h1 className="text-2xl font-bold mb-4">
                    {menuItems.title} ({finalFilteredItems.length})
                </h1>
                <button className="text-xl">
                    {isOpen ? <FaArrowUp /> : <FaArrowDown />}
                </button>
            </div>

            {isOpen ? (
                <div className="space-y-4">
                    {finalFilteredItems.map((bitto) => (
                        <Menuinfo key={bitto.id} data={bitto} />
                    ))}
                </div>
            ) : (
                <div className="bg-gray-200 h-[20px] w-full rounded-2xl"></div>
            )}
        </div>
    );
}
