import HomePage from "./components/homePage/HomePage.jsx";
import AboutUsPage from "./components/aboutUs/aboutUsPage.jsx";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>

        {/* default page */}
        <Route path="/" element={<HomePage />} />

        {/* direct pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}
