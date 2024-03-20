import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import About from "./pages/About";
import ArticleListPage from "./pages/ArticleListPage";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
