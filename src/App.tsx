import { CursorGlow } from "./components/CursorGlow";
import { ScrollProgress } from "./components/ScrollProgress";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <LandingPage />
    </>
  );
}

export default App;
