import { useGLTF } from "@react-three/drei";

const Piece = ({ piece, position, color, t_color1, t_color2}) => {
    const { nodes } = useGLTF("/figures.gltf");
    const adjusted = [
        position[0] - 3.5,
        0,
        position[1] - 3.5
    ];

    return (
        <group scale={[0.7, 0.7, 0.7]} position={adjusted} dispose={null}>
            <mesh
                castShadow
                geometry={nodes[piece].geometry}
            >
                <meshStandardMaterial metalness={1} color={color === "white" ? t_color1 : t_color2 } />
            </mesh>
        </group>
    );
};

export default Piece;
