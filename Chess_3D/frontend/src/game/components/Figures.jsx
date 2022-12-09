import Piece from "./Piece";

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

export default Figures;