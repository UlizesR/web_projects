import { Link } from "react-router-dom";

import ThemeScene from "../components/ThemeScene";

const PlayMenu = () => {

    let t_color1 = "Gainsboro"
    let t_color2 = "Rosybrown"
    let color1 = "Lavender"
    let color2 = "#aaa"


    return (
        <div className="h-screen">
            <div className="h-1/3 bg-[rgb(23, 21, 21)] flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl text-slate-400 mb-2">Choose Theme</h1>
            </div>
            {

            }
            <div className="flex justify-center h-1/3">
                <div className="grid items-center">
                    <button id='left' className="rounded-xl bg-amber-400 font-semibold text-white text-2xl mx-4 p-4 h-[75px] top-[50%-37.5px] uppercase">
                        {"<-"}
                    </button>
                </div>
                <div className="h-4/5">
                    {/* <ThemeScene t_color1={"#9597CD"} t_color2={"#361152"} color1={"#3F428E"} color2={"#242424"} /> */}
                </div>
                <div className="grid items-center">
                    <button id='left' className="rounded-xl bg-amber-400 font-semibold text-white text-2xl mx-4 p-4 h-[75px] top-[50%-37.5px] uppercase">
                        {"->"}
                    </button>
                </div>
            </div>
            <div className="h-1/3 bg-[rgb(23, 21, 21)] flex flex-col justify-center items-center">
                <Link className="rounded-xl bg-amber-400 font-semibold text-white text-2xl mt-6 px-6 py-2 uppercase" to="/Game">
                    Start Game
                </Link>
            </div>
        </div>
    )
}

export default PlayMenu;