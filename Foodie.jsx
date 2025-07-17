import items from "./in";

function Foodie() {
    return (
        <>
            <div className="w-[80%] mx-auto flex flex-wrap mt-20">
                {
                    items.map((data) => (
                        <a key={data.text} href={data?.link} > <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + data?.imageId} alt={data.text}  className="w-40 h-50 object-cover" />
                        </a>
                    ))
                }
            </div>
        </>
    );
}

export default Foodie;
