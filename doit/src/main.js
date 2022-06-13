import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app";
import HomePage from "./pages/homePage"; //main home page
/*import sendPage from "./pages/sendPage";
import morePage from "./pages/morePage";
import findPage from "./pages/findPage";
import likePage from "./pages/likePage";
import profilePage from "./pages/profilePage";*/

function Main() {
  const feedId = "feed/1";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App feedId={feedId} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="send" element={<sendPage />} />
          <Route path="more" element={<morePage />} />
          <Route path="find" element={<findPage />} />
          <Route path="like" element={<likePage />} />
          <Route path="profile" element={<profilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
