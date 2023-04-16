import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";
import RequireAuth  from './util/RequireAuth';
import NotFound from './pages/NotFound';


function App() {
  
  return (
    <AuthProvider>
      <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
          <Route path="/feedback-form" element={<RequireAuth><Feedback /></RequireAuth>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>

    </AuthProvider>
    

  );
}

export default App;
