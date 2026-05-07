import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import FlightDetails from "./pages/FlightDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Flights */}
        <Route
          path="/flights"
          element={<Flights />}
        />

        {/* Flight Details */}
        <Route
          path="/flight/:id"
          element={<FlightDetails />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* Protected Route */}
        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;