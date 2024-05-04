import { useSelector } from "react-redux";
import { selectMessage } from "./redux/cardSlice";

const Message = () => {
  const message = useSelector(selectMessage);
  return <>{message && <p className="message">{message}</p>}</>;
};

export default Message;