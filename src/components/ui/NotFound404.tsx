import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <div>
      <p>NotFound404</p>
      <Button color="primary" onClick={() => navigate("/")}>
        go home
      </Button>
    </div>
  );
}
