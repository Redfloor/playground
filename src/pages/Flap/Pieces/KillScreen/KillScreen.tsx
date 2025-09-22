export const KillScreen = () => {
    return (
        <div style={{
            position: "absolute",
            padding: 20,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(100, 100, 100, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'column',
            color: "#fff",
            fontSize: "2rem",
            borderRadius: 40,
            border: "solid 2px #f00",
        }}>
            <h1>Game Over</h1>
            <button onClick={() => {
                window.location.reload();
            }}>Restart</button>
        </div>
    )
}
