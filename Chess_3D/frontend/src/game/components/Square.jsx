const Square = ({ x, y, size, color }) => {
    return (
        <group position={[x - 3.5, -0.25 , y - 3.5]}>
            <mesh>
                <boxGeometry attach="geometry" args={[size, 0.5, size]} />
                <meshStandardMaterial metalness={1} attach="material" color={color} />
            </mesh>
        </group>
    );
};

export default Square;
