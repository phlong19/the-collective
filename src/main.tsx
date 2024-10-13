import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from "react-redux";
import { store } from "./services/redux/store.ts";
import { ErrorBoundary } from "react-error-boundary";
import FallBackErrorBoundary from "./components/ui/FallBackErrorBoundary.tsx";
import { ConfigProvider } from "antd";
import { theme } from "./theme/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={FallBackErrorBoundary}
        onReset={() => window.location.replace("/")}
      >
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </ErrorBoundary>
    </ConfigProvider>
  </StrictMode>,
);
