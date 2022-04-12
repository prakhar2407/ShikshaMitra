import Login from "./pages/auth/login/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/auth/register/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/auth/login" element={<Login/>}/>
        <Route exact path="/auth/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
