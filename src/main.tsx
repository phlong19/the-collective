import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./services/redux/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorBoundary from "./components/ui/FallBackErrorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={FallBackErrorBoundary}
      onReset={() => window.location.replace("/")}
    >
      {/* <Provider store={store}> */}
        <App />
      {/* </Provider> */}
    </ErrorBoundary>
  </StrictMode>,
);
