import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WelcomePage from "./Home/pages/WelcomePage";
import PlayMenu from "./Home/pages/PlayMenu";
import Game from "./Home/pages/Game"

const App = () => {
  return (
    <div className="h-screen w-screen">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/PlayMenu" element={<PlayMenu />}></Route>
          <Route path="/Game" element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  )
};

export default App;