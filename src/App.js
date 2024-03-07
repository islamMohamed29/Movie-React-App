import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Sub from "./components/Sub.jsx";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Movies from "./components/Movies";
import TvShows from "./components/TvShows";

function App() {
  const [userData, setUserData] = useState(true);

  function saveUserData() {
    // let userToken = localStorage.getItem("token");
    // let decodedToken = jwtDecode(userToken);
    setUserData(true);
  }

  let navigate = useNavigate();
  function logOut() {
    setUserData(null);
    // localStorage.removeItem("token");
    navigate("/login");
  }
  function ProtectedRoute(props) {
    if (localStorage.getItem("token") === true) {
      return <Navigate to="/login" />;
    } else {
      return props.children;
    }
  }

  useEffect(() => {
    <Navigate to="/login" />;
    setUserData(null);
    // if (localStorage.getItem("token")) {
    //   saveUserData();
    // }
  }, []);
  return (
    <>
      <Navbar logOut={logOut} userData={userData} />
      <Routes>
        <Route path="/" element={<Sub />} />
        <Route
          path="/login"
          element={
            <Login saveUserData={saveUserData} setUserData={setUserData} />
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Movie-App-React.JS"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tvshows"
          element={
            <ProtectedRoute>
              {" "}
              <TvShows />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/moviedetails"
          element={
            <ProtectedRoute>
              {" "}
              <MovieDetails />
            </ProtectedRoute>
          }
        >
          <Route
            path=":id"
            element={
              <ProtectedRoute>
                {" "}
                <MovieDetails />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Footer userData={userData} />
    </>
  );
}

export default App;
