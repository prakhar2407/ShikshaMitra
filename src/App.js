import Login from "./pages/auth/Signin/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup/signup";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/home/homePage";


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/auth/signin" element={<Login />} />
          <Route exact path="/auth/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
