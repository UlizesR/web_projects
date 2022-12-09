import Piece from "./Piece";

const Figures = ({ game, t_color1, t_color2 }) => {

    return (
        <>
            {game.figures.map((figure) => {
                return (
                    <Piece
                        key={`(${figure.position[0]},${figure.position[1]})`}
                        position={figure.position}
                        piece={figure.piece}
                        color={figure.color}
                        t_color1={t_color1}
                        t_color2={t_color2}
                    />
                );
            })}
        </>
    );
};

export default Figures;