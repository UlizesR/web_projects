import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";

import Chessboard from "../../game/components/Chessboard"


const WelcomePage = () => {
    return (
        <div className="h-screen bg-main-blue flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-slate-100 uppercase mb-4">
                Hello There
            </h1>
            <h1 className="font-bold text-3xl text-slate-100 uppercase mt-4 mb-2">
                Welcome to 3D Chess
            </h1>
            <Link className="rounded-xl bg-amber-400 font-semibold text-white text-2xl mt-4 px-6 py-2 uppercase" to="/PlayMenu">
                Start
            </Link>
        </div>
    )
}

export default WelcomePage;