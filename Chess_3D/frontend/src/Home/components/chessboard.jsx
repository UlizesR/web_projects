import Square from "../../game/components/Square";

const Chessboard = ({color1, color2}) => {
    const fields = [0, 1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            {fields.map((x) =>
                fields.map((y) => (
                    <Square
                        key={`(${x},${y})`}
                        x={x}
                        y={y}
                        size={1}
                        color={(x + y) % 2 === 0 ? color1 : color2}
                    />
                ))
            )}
            <mesh position={[4.38, -0.25, 0]} >
                <boxGeometry args={[0.75, 0.5, 8]} />
                <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh position={[-4.38, -0.25, 0]} >
                <boxGeometry args={[0.75, 0.5, 8]} />
                <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh position={[0, -0.25, -4.37]} >
                <boxGeometry args={[9.51, 0.5, 0.75]} />
                <meshStandardMaterial color={"black"} />
            </mesh>
            <mesh position={[0, -0.25, 4.37]} >
                <boxGeometry args={[9.51, 0.5, 0.75]} />
                <meshStandardMaterial color={"black"} />
            </mesh>
        </>
    );
};

export default Chessboard;