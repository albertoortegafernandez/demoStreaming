import { Routes, Route} from "react-router-dom";
import {Home}  from "./app/pages/Home";
import {Films}  from "./app/pages/Films";
import {Series}  from "./app/pages/Series";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        
      </Routes>
    </>
  );
}

export default App;
