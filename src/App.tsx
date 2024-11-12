// libs
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts
import AppLayout from "./components/layout/AppLayout";
// ui
import NotFound404 from "./components/ui/NotFound404";
import Event from "./pages/Event";
// ui
import ScrollToTop from "./components/ui/ScrollToTop";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
// pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="articles" element={<Articles />} />
            <Route path="event/:slug" element={<Event />} />
            <Route path="article/:slug" />
            <Route path="global-search" />
          </Route>
          {/* auth */}
          <Route>
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/forgot-password" />
          </Route>

          {/* authenticated */}

          <Route>
            <Route path="profile" element={<Profile />} />
            <Route path="submit-event" />
            <Route path="preference" />
            <Route path="favorite" />
            <Route path="purchased" />
            <Route path="interlink" />
            <Route path="unsubscribe" />
          </Route>

          <Route path="sitemap" />
          <Route path="privacy-statement" />
          <Route path="terms-of-use" />
          <Route path="FAQs" />

          <Route path="maintenance" />
          <Route path="maintenance" />

          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
