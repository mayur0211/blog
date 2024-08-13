import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SubPage from './components/SubPage';
import AllPost from './pages/CategoryPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import CategoryPage from './pages/CategoryPage';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allpost" element={<AllPost />} />
          <Route path="/blog/:slug" element={<BlogDetails/>} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
