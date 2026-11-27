import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router";
9
const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<Edit />} />
                <Route path="/Blog" element={<Categories />} />
            </Routes>
        </BrowserRouter>
    );
};
