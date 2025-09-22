 interface TerrainProps {
    up: number;
}

export const Terrain = ({up}: TerrainProps) => {
    return (
        <div style={{
            position: "absolute",
            top: `calc(50% + ${up}px + 130px)`,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#c90",
        }}></div>
    )
}
