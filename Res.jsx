import { Link } from "react-router";

export default function Res({ resdata }) {
    const urlSafeName = resdata.name.toLowerCase().replace(/\s+/g, "-");

    return (
        <Link to={`/restaurant/${resdata.id}`}>
            <div className="w-[280px] rounded-2xl bg-white shadow-md overflow-hidden flex-shrink-0 hover:shadow-lg hover:scale-105 transform transition-all duration-300 border border-gray-200 cursor-pointer">
                <img
                    className="h-44 w-full object-cover"
                    src={ "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  resdata.cloudinaryImageId } alt={resdata.name} />

                <div className="p-4">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">{resdata.name}</h2>
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                            {resdata.avgRating}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 truncate mt-1">
                        {resdata.cuisines.join(" • ")}
                    </p>
                    <p className="text-sm text-gray-500">{resdata.locality}</p>
                </div>
            </div>
        </Link>
    );
}
