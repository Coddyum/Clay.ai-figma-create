import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="w-screen h-auto pt-24 px-10 bg-gray-900 overflow-x-hidden">
            <div className="wh-100 mx-auto"></div>
            <div className="mx-10 w-1008 h-auto my-6 flex gap-x-32">
                <div className="w-488 h-auto">
                    <div className="pl-2 pr-4 py-2 rounded-3xl inline-block border-2 border-gray-700 border-solid bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900">
                        <h4 className="text-white">
                            <span className="mr-2 text-white rounded-2xl px-2 bg-gradient-to-t to-boston-blue-600 from-bermuda-300">
                                New
                            </span>
                            Top selling on Framer
                        </h4>
                    </div>
                    <h1 className="font-bold text-cod-red text-5-5xl text-left my-6">
                        Boost your Productivity with Creative AIs
                    </h1>
                    <p className="text-xl text-gray-500">
                        Specialising in crafting visually stunning and highly
                        functional user interfaces.
                    </p>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default HeroSection;
