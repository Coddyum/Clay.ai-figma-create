import React from "react";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="w-screen h-auto pt-24 px-10 bg-blue-400">
            <div className="wh-100 bg-red-500 mx-auto"></div>
            <div className="mx-10 h-auto my-24 flex gap-x-30 bg-green-600">
                <div className="w-488 h-auto">
                    <div className="rounded-3xl p-2 text-sm bg-gradient-to-r from-slate-500  to-slate-900 inline-block">
                        <h4 className="text-white"><span className=" text-white rounded-xl p-1 bg-gradient-to-t to-boston-blue-600 from-bermuda-300">New</span> Top selling on Framer</h4>
                    </div>
                    <h1 className="font-bold text-white text-5-5xl text-left my-6">Boost your Productivity with Creative AIs</h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
