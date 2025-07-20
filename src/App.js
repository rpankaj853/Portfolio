import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import HomePage from "./Component/HomePage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      // Common combinations to block (Windows and Mac)
      const blocked =
        e.key === "F12" || // F12
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) || // Windows: Ctrl+Shift+I/J/C
        (e.ctrlKey && key === "u") || // Windows: Ctrl+U
        (e.metaKey && e.altKey && ["i", "j", "c"].includes(key)) || // Mac: Cmd+Opt+I/J/C
        (e.metaKey && key === "u"); // Mac: Cmd+U

      if (blocked) {
        e.preventDefault();
        console.log("DevTools shortcut blocked");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div className=" overflow-clip">
      <HomePage />
    </div>
  );
}

export default App;
