import "./NavBar.css";

import ButtonPrimary from "../../common/Button/Primary/Button";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function NavBar() {
    return (
        <nav className="w-screen h-16 bg-gray-900 flex items-center justify-center">
            <h1 className="max-w-[1200px] ml-24 my-4 font-bold line-height32 bg-gradient-to-r from-slate-50  via-slate-100 via-50% to-slate-800 inline-block text-transparent bg-clip-text ">
                clay.ai
            </h1>
            <div className="ml-[344px] text-slate-500 flex gap-x-8">
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
