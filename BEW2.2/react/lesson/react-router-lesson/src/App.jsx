import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import Blog from "./pages/Blog"
import "./App.css"
import BlogPost from "./pages/BlogPost"
import Comments from "./components/Comments"

const App = () => {
  return (
      <BrowserRouter>
      <Navigation />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Blog/:id" element={<BlogPost />}>
              <Route path="comments" element={<Comments />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}


export default App