import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CursorGlow } from "./components/CursorGlow";
import { ExperienceDetailPage } from "./pages/ExperienceDetailPage";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/erfaring/:slug" element={<ExperienceDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
