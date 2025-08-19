
const Notification = ({ message}) => {
  if (!message) return null

  return (
    <div
      style={{
        color: "#333",
        background: "#e0ffe0",
        border: "2px solid #4caf50",
        padding: "12px 20px",
        margin: "10px 0",
        borderRadius: "5px",
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(76, 175, 80, 0.1)"
      }}
    >
      {message}
    </div>
  )
}

export default Notification
