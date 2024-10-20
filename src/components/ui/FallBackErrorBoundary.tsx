import { Button } from "antd";
import { FallbackProps } from "react-error-boundary";

export default function FallBackErrorBoundary({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  console.log(error);
  return (
    <div>
      <h3>FallBackErrorBoundary</h3>
      <p style={{ color: "red" }}>{error.message}</p>
      <Button onClick={resetErrorBoundary}>go home</Button>
    </div>
  );
}
