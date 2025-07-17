export default function DineCard({ resdata }) {
    
    return (
        <div className="w-[280px] rounded-2xl bg-white shadow-md overflow-hidden flex-shrink-0 hover:shadow-lg transition-all duration-300 border border-gray-200">
            <a href={resdata.link} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resdata.imageUrl} alt={resdata.name} className="h-44 w-full object-cover" />

                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                    {resdata.name} </div>

                    <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1"> {resdata.rating.value} </div>
                </div>
            </a>

            <div className="p-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-700">
                    <p>{resdata.cuisines.join(" • ")}</p>
                    <p className="text-right whitespace-nowrap">{resdata.costForTwo}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                    <p>{resdata.locality}, Delhi</p>
                    <p>{resdata.distance}</p>
                </div>

                <div className="bg-teal-100 text-teal-800 text-sm px-3 py-2 rounded-md"> {resdata.offers[2]} </div>
            </div>
        </div>
    );
}
