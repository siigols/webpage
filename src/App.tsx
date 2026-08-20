import { AuroraBackground } from "./components/AuroraBackground";
import { CursorGlow } from "./components/CursorGlow";
import { ScrollProgress } from "./components/ScrollProgress";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <CursorGlow />
      <LandingPage />
    </>
  );
}

export default App;
