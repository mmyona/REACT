import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/page1"; //main home page
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Nav from "./nav";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
