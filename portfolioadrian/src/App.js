import "./index.css";
import Navbar from "./components/Navbar";
import Me from "./components/Me";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-body text-white font-mono">
      <Navbar />
      <Me />
      <Experience />
    </div>
  );
}

export default App;
