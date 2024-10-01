import { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

export default function FallBackErrorBoundary({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const theme = useTheme();

  console.log(error);
  return (
    <div>
      <h3>FallBackErrorBoundary</h3>
      <p style={{ color: "red" }}>{error.message}</p>
      <Button
        onClick={resetErrorBoundary}
        variant="contained"
        sx={{
          backgroundColor: (theme.palette.primary as any)[400],
          "&:hover": {
            backgroundColor: (theme.palette.primary as any)[800],
          },
        }}
      >
        go home
      </Button>
    </div>
  );
}
