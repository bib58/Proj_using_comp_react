import { useState } from "react";
import {Restaurants} from "./in_3";
import Res from "./Res"
import Shimmer from "./Shimmer";


export default function Restaurant() {

    const [dating , setdating] = useState({});

    // useEffect(() => {
    //     async function fetching() {
    //         const proxyserver = "https://cors-anywhere.herokuapp.com/";

    //         const response = await fetch(proxyserver + "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1");

    //         const repo = await response.json();
    //         const restaurants = repo.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //         setdating(restaurants);
    //     }
    // } , []);

    if (dating.length == 0) 
        return <Shimmer/>
    
    return (
        <>
            <div className="w-[90%] mx-auto mt-20 mb-20">
                <h2 className="text-[21px] font-bold">Explore best Restaurants nearby</h2>
                
                <div className="flex flex-wrap justify-center mt-5 gap-5">
                    {
                        Restaurants.map((resdata) => <Res key={resdata.id} resdata={resdata}></Res>)
                    }
                </div>
            </div>
        </>
    )
}