import React from "react";

function ButtonSecondary({ text }) {
    return(
        <button className="w-auto h-10 px-5 flex items-center justify-center border-solid rounded-xl bg-white text-base font-bold">
            { text }
        </button>
    )
}

export default ButtonSecondary