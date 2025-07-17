import { useSelector } from "react-redux";

export default function Checkout() {
    const list = useSelector(state => state.CartsSlice.items);

    const totalCartPrice = list.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">Your Cart</h2>

            {list.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">Your cart is empty 🛒</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {list.map(value => (
                            <div key={value.id} className="flex items-center justify-between border-b pb-4">
                                <div>
                                    <p className="text-xl font-semibold text-gray-800">{value.name}</p>
                                    <p className="text-sm text-gray-500">ID: {value.id}</p>
                                    <p className="text-sm text-gray-600">Price: ₹{value.price/100}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg text-gray-700">
                                        Qty: <span className="font-bold text-orange-500">{value.quantity}</span>
                                    </p>
                                    <p className="text-md font-semibold text-green-600 mt-1">
                                        Total: ₹{(value.quantity * value.price)/100}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-4 text-right">
                        <p className="text-2xl font-bold text-gray-800">
                            Total: <span className="text-green-600">₹{totalCartPrice/100}</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

