import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage"; 
import UpdatePage from "./routes/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants/:id/update" element={<RestaurantDetailPage />} /> 
            <Route path="/restaurants/:id" element={<UpdatePage />} /> 
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
