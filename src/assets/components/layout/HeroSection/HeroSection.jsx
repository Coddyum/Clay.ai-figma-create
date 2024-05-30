import React from "react";
import "./HeroSection.css";
import ButtonSecondary from "../../common/Button/Secondary/SecButton";
import ButtonPrimary from "../../common/Button/Primary/Button";

function HeroSection() {
    return (
        <section
            title="section div"
            className="w-full flex items-center justify-center bg-slate-900">
            <div
                title="main-container"
                className=" max-w-[1200px] h-auto pt-24 px-10 bg-gray-900">
                <div
                    title="little box space 100"
                    className="w-[100px] h-[100px] mx-auto"></div>
                <div className="w-[1008px] h-auto my-24 flex gap-x-[120px]">
                    <div className="w-[488px] h-auto flex flex-col justify-center">
                        <div
                            title="top selling on framer"
                            className="pl-2 pr-4 py-2 rounded-3xl w-[240px] border-2 border-gray-700 border-solid bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900">
                            <h4 className="text-white">
                                <span className="mr-2 text-white rounded-2xl px-2 bg-gradient-to-t to-boston-blue-600 from-bermuda-300">
                                    New
                                </span>
                                Top selling on Framer
                            </h4>
                        </div>
                        <h1 className="font-bold text-white text-[56px] text-left my-6">
                            Boost your Productivity with Creative AIs
                        </h1>
                        <p className="text-xl text-gray-500">
                            Specialising in crafting visually stunning and
                            highly functional user interfaces.
                        </p>
                        <div className="flex gap-x-4 mt-10">
                        <ButtonPrimary text={"Get Started"} />
                        <ButtonSecondary text={"Contact Us"}/>
                        </div>
                    </div>
                    <div className="w-[400px] relative position">
                        <img
                            src="src\assets\components\layout\HeroSection\img\background.png"
                            alt=""
                            className="w-full h-auto"
                        />
                        <img
                            src="src\assets\components\layout\HeroSection\img\bestAuthors.png"
                            alt=""
                            className="absolute w-[350px] bottom-0 -left-20"
                        />
                        <img
                            src="src\assets\components\layout\HeroSection\img\createdToday.png"
                            alt=""
                            className="absolute w-[300px]  top-16 -right-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
