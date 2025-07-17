export default function Shimmer() {
    return (
        <div className="w-[90%] mx-auto mt-10 mb-20 flex flex-wrap justify-center gap-5">
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="w-[280px] animate-pulse rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
                >
                    <div className="h-44 w-full bg-gray-300 shimmer"></div>
                    <div className="p-4 space-y-3">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
