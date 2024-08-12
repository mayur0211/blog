import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SubPage from './components/SubPage';
import AllPost from './pages/AllPost';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpost" element={<AllPost />} />
          <Route path="/subpage/:slug" element={<SubPage/>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
