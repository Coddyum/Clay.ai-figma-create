import React from "react";
import "./NavBar.css";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import ButtonPrimary from "../Button/Primary/Button";

function NavBar() {
    return (
        <nav className="w-screen h-16 bg-gray-900 flex items-center">
            <h1 className="ml-24 my-4 font-bold line-height32 bg-gradient-to-r from-slate-50  via-slate-100 via-50% to-slate-800 inline-block text-transparent bg-clip-text ">
                clay.ai
            </h1>
            <div className="a-ml-344 text-slate-500 flex gap-x-8">
                <a className="text-slate-200" href="#">
                    Home
                </a>

                {/* TODO: ajouter un menu déroulant pour page et resources  */}

                <button>
                    Pages
                    <ChevronDownIcon className="inline-block w-5 h-5 text-slate-500" />
                </button>
                <button>
                    Resources
                    <ChevronDownIcon className="inline-block w-5 h-5 text-slate-500" />
                </button>

                <a href="#">Contact</a>
            </div>
            <div className="ml-12">
                <ButtonPrimary text={"Get the template"} />
            </div>
        </nav>
    );
}

export default NavBar;
