import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="message" />
        </Route>
        <Route path="about" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
