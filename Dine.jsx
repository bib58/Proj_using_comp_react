import {information} from "./in_2";
import Dinecard from "./Dinecard";

export default function Dine() {
     
    return (
        <>
            <div className="w-[90%] mx-auto mt-20 mb-20">
                <h2 className="font-bold text-[21px]">Discover best Restaurants on Dineout</h2>

                <div className="flex flex-nowrap overflow-auto mt-5 gap-5">
                    {
                        information.map((resdata) => <Dinecard key={resdata.id} resdata={resdata}></Dinecard>)
                    }
                </div>
            </div> 
        </>
    )
}