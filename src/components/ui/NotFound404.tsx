import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound404() {
  const navigate = useNavigate();

  return (
    <div>
      <p>NotFound404</p>
      <Button variant="text" onClick={() => navigate("/")} color="primary">
        go home
      </Button>
    </div>
  );
}
