import { useNavigate, useParams } from "react-router-dom";
import Room from "./Room";

export const withRouter = (Room) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(Room);
};

export default withRouter(Room);