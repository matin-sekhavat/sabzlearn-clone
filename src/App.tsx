import { Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
