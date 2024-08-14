import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SubPage from './components/SubPage';
import AllPost from './pages/CategoryPage';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './pages/BlogDetails';
import CategoryPage from './pages/CategoryPage';
import { Toaster } from 'react-hot-toast';
import AppFooter from './components/Footer';



function App() {
  return (
    <Router>
      <div>
        <Toaster position='top-right' />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcategory" element={<CategoryPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
}
export default App;
