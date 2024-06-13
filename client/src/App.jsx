import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantsDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Restaurants/:id/update" element={<UpdatePage />} />
            <Route path="/Restaurants/:id" element={<RestaurantsDetailPage />} />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
