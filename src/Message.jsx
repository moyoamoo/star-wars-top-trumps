import { useSelector } from "react-redux";
import { selectMessage } from "./redux/cardSlice";

const Message = () => {
  const message = useSelector(selectMessage);
  return <>{message && <p>{message}</p>}</>;
};

export default Message;
