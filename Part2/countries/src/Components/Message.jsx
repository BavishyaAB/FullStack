const Message = ({ message }) => {
  return (
    <div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Message;