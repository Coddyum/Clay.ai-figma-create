import React from "react";
import { StarIcon, HeartIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/16/solid";
import "./MovingBanner.css"


{/* TODO: Ajouter l'annimation de carousel infinit */}


function MovingBanner() {
    return(

       <div className="w-screen flex items-center justify-center h-10 bg-gray-900 text-slate-400">
            <ul className=" max-w-[1200px] h-5 flex gap-x-12 items-center justify-center py-5">
                <li>
                    <StarIcon className="inline-block mr-1 size-4 text-slate-400"/>
                    Top-rated on Framer
                </li>
                <li>
                    <HeartIcon className="inline-block size-4 mr-1 text-slate-400"/>
                    100+ copies sold
                </li>
                <li>
                    <ClockIcon className="inline-block size-4 mr-1 text-slate-400"/>
                    Free updates
                </li>
                <li>
                    <ShieldCheckIcon className="inline-block size-4 mr-1 text-slate-400"/>
                    Lifetime access included
                </li>
                <li>
                    <StarIcon className="inline-block size-4 mr-1 text-slate-400"/>
                    Top-rated on Framer
                </li>
                <li>
                    <HeartIcon className="inline-block size-4 text-slate-500"/>
                    100+ copies sold
                </li>
            </ul>
       </div> 
    );
}

export default MovingBanner