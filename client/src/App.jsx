import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home"
import RestaurantsDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/restaurants/:id/update" element={<UpdatePage />} />
          <Route exact path="/restaurants/:id" element={<RestaurantsDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
