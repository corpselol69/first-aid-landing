import Home from "./pages/Home";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
