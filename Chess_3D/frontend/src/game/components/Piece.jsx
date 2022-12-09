import { useGLTF } from "@react-three/drei";
import { arrayEqual } from "../utils/utils";
import getAvailableMoves from "../hook/getAvailableMoves";

const Piece = ({ piece, position, color, game, hovered, setHovered }) => {
    const { nodes } = useGLTF("/figures.gltf");
    const adjusted = [
        position[0] - 3.5,
        hovered && hovered.selected && arrayEqual(hovered.position, position)
            ? 1
            : 0,
        position[1] - 3.5
    ];

    const onPointerOver = () => {
        if (game.currentTurn !== color) {
            return;
        }

        if (hovered?.selected) {
            return;
        }
        const available = getAvailableMoves(game, position);
        setHovered(
            available ? { position, selected: false, available: available } : null
        );
    };

    const onPointerOut = () => {
        if (
            hovered !== null &&
            !hovered.selected &&
            arrayEqual(hovered.position, position)
        ) {
            setHovered(null);
        }
    };

    const onPointerUp = () => {
        // Don't allow to select piece with no available moves.
        if (
            hovered === null ||
            (hovered.available.moves.length === 0 &&
                hovered.available.takes.length === 0)
        ) {
            return;
        }

        setHovered({ ...hovered, selected: true });
    };

    const calculatedColor =
        hovered !== null && arrayEqual(hovered.position, position)
            ? "#ff00ff"
            : color === "white"
                ? "Gainsboro"
                : "Rosybrown";

    return (
        <group scale={[0.7, 0.7, 0.7]} position={adjusted} dispose={null}>
            <mesh
                castShadow
                onPointerOver={onPointerOver}
                onPointerOut={onPointerOut}
                onPointerUp={onPointerUp}
                geometry={nodes[piece].geometry}
            >
                <meshStandardMaterial metalness={1} color={calculatedColor} />
            </mesh>
        </group>
    );
};

export default Piece;
