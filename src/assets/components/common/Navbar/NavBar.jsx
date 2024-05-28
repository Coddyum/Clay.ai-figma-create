import React from "react";
import "./NavBar.css";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function NavBar() {
    return (
        <div className="w-screen h-16 bg-gray-900 flex items-center">
            <h1 className="ml-24 my-4 font-bold line-height32 bg-gradient-to-r from-slate-50  via-slate-100 via-50% to-slate-800 inline-block text-transparent bg-clip-text ">
                clay.ai
            </h1>
            <div className="a-ml-507 inline-block text-slate-500">
                <a className="text-slate-200" href="#">
                    Home
                </a>
                <a className="ml-8 " href="#">
                    Pages
                    <ChevronDownIcon className="inline-block w-5 h-5 text-slate-500" />
                </a>
                <a className="ml-8 " href="#">
                    Resources
                    <ChevronDownIcon className="inline-block w-5 h-5 text-slate-500" />
                </a>
                <a className="ml-8" href="#">
                    Contact
                </a>
            </div>
        </div>
    );
}

export default NavBar;
