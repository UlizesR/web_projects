import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { softShadows } from "@react-three/drei";

import initial from "../../game/constants/initial";
import Chessboard from "./chessboard";
import Figures from "./Figures";

softShadows({});

const ThemeScene = ({color1, color2, t_color1, t_color2}) => {
    const [game, setGame] = useState(initial);

    return (
        <>
            <Canvas
                shadows={{ type: "BasicShadowMap" }}
                // dpr={[1, 2]}
                camera={{ position: [4, 7, 0] }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[-10, 0, -20]} color="purple" intensity={2.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />
                <directionalLight
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                    intensity={1.5}
                    position={[4, 10, 4]}
                />
                <Suspense fallback={null}>
                    <Chessboard color1={color1} color2={color2}/>
                    <Figures game={game} t_color1={t_color1} t_color2={t_color2}/>
                    
                    <mesh
                        rotation={[-Math.PI / 2, 0, 0]}
                        position={[0, 0.01, 0]}
                        receiveShadow
                    >
                        <planeGeometry attach="geometry" args={[10, 10]} />
                        <shadowMaterial attach="material" transparent opacity={0.3} />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    )
}

export default ThemeScene;