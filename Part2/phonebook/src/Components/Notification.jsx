
const Notification = ({ message, type }) => {
    if (!message) return null

    const styles = {
        success: {
            color: "#333",
            background: "#e0ffe0",
            border: "2px solid #4caf50"
        },
        error: {
            color: "#fff",
            background: "#8f8a8aff",
            border: "2px solid #f44336"
        },
        info: {
            color: "#333",
            background: "#e0f7fa",
            border: "2px solid #00bcd4"
        }
    }

    const baseStyle = {
        padding: "12px 20px",
        margin: "10px 0",
        borderRadius: "5px",
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(76, 175, 80, 0.1)"
    }

    const style = { ...baseStyle, ...(styles[type] || styles.success) }

    return (
        <div style={style}>
            {message}
        </div>
    )
}

export default Notification
