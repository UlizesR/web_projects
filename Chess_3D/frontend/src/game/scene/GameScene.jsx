import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { OrbitControls, softShadows } from "@react-three/drei";

import Chessboard from "../components/Chessboard";
import Piece from "../components/Piece";
import HoverableSquare from "../components/HoverableSquare";
import initial from "../constants/initial";
import GameUI from "../components/GameUI";

softShadows({});

const Figures = ({ game, hovered, setHovered }) => {

    return (
        <>
            {game.figures.map((figure) => {
                return (
                    <Piece
                        key={`(${figure.position[0]},${figure.position[1]})`}
                        position={figure.position}
                        piece={figure.piece}
                        color={figure.color}
                        game={game}
                        hovered={hovered}
                        setHovered={setHovered}
                    />
                );
            })}
        </>
    );
};

const AvailableMoves = ({ game, hovered, setGame, setHovered }) => {

    if (!hovered) {
        return null;
    }

    return (
        <>
            {hovered.available.moves.map((move) => (
                <HoverableSquare
                    key={`(${move[0]},${move[1]})`}
                    x={move[0]}
                    y={move[1]}
                    z={0.01}
                    color={(hovered) => (hovered ? "#0000ff" : "#ff00ff")}
                    size={0.5}
                    game={game}
                    hovered={hovered}
                    setGame={setGame}
                    setHovered={setHovered}
                />
            ))}
            {hovered.available.takes.map((move) => (
                <HoverableSquare
                    key={`(${move[0]},${move[1]})`}
                    x={move[0]}
                    y={move[1]}
                    z={0.01}
                    color={(hovered) => (hovered ? "#0000ff" : "#ff00ff")}
                    size={0.9}
                    game={game}
                    hovered={hovered}
                    setGame={setGame}
                    setHovered={setHovered}
                />
            ))}
        </>
    );
};

const GameScene = () => {
    const [game, setGame] = useState(initial);
    const [hovered, setHovered] = useState(null);

    return (
        <>
            <GameUI />
            <Canvas
                shadows={{ type: "BasicShadowMap" }}
                dpr={[1, 2]}
                camera={{ position: [4, 10, 0] }}
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
                <OrbitControls />
                <Suspense fallback={null}>
                    <Chessboard />
                    <Figures game={game} hovered={hovered} setHovered={setHovered} />
                    <AvailableMoves
                        game={game}
                        hovered={hovered}
                        setGame={setGame}
                        setHovered={setHovered}
                    />
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
    );
};

export default GameScene;