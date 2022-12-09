import HoverableSquare from "../components/HoverableSquare";

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

export default AvailableMoves;