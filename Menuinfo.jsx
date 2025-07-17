import { addItems , incrementItems , decremenItems } from "./cart_1";
import { useDispatch, useSelector } from "react-redux";

export default function Menuinfo({ data }) {   // Can't rename this prop, should be similar to one we have passes

    const ispatch = useDispatch();
    const items = useSelector(state => state.CartsSlice.items);

    const ding_dong = items.find(item => item.id === data.id);
    const count = ding_dong? ding_dong.quantity : 0;  // for Recommended part

    function handle_add() {
        // setcount(1);
        ispatch(addItems(data));
    }

    function handle_decre() {
        // setcount(count-1);
        ispatch(decremenItems(data));
    }
    function handle_incre() {
        // setcount(count+1);
        ispatch(incrementItems(data));
    }

    function getOptions() {
        const options = [];

        if (data.choices && Array.isArray(data.choices)) {
            for (let choice of data.choices) {
                options.push(choice.name);
            }
        }

        if (data.addons && Array.isArray(data.addons)) {
            for (let group of data.addons) {
                for (let choice of group.choices) {
                    options.push(group.groupName + ": " + choice.name);
                }
            }
        }

        return options;
    }

    const options = getOptions();

    return (
        <div className="border rounded p-4 shadow-sm bg-white flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-xl">{data.isVeg === 1 ? '🟢' : '🔴'}</span>
                    <h2 className="text-xl font-semibold break-words whitespace-normal">{data.name}</h2>
                </div>
                {data.description && <p className="text-gray-600 mb-2">{data.description}</p>}
                <p className="text-green-700 font-bold mb-2">₹{data.price / 100}</p>


                {options.length > 0 && (
                    <div className="bg-gray-150 border-t pt-2 mt-2 p-4">
                        <p className="text-sm font-medium mb-1 text-gray-800">
                            Available Options:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                            {options.map((opt, idx) => (
                                <li key={idx}>{opt}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {
                count === 0 ? (
                    <button className="text-green-400 font-bold p-1 rounded-2xl text-[18px] border-2 cursor-pointer border-green-400" onClick={() => handle_add()}>
                        Add
                    </button>
                ) : (
                    <div className="flex items-center gap-2 text-green-400 font-bold p-1 rounded-2xl text-[18px] border-2 cursor-pointer border-green-400">
                        <button className="text-xl font-bold p-2 cursor-pointer hover:bg-gray-200 rounded-3xl" onClick={() => handle_decre()}>-</button>
                        <span>{count}</span>
                        <button className="text-xl font-bold p-2 cursor-pointer hover:bg-gray-200 rounded-3xl" onClick={() => handle_incre()}>+</button>
                    </div>
                )
            }
        </div>
    );
}
