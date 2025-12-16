import HomePage from "./components/homePage/HomePage.jsx";
import AboutUsPage from "./components/aboutUs/aboutUsPage.jsx";
import ExploreWork from "./components/exploreWork/ExploreWork.jsx";
import TrendingPage from "./components/trending/Trending.jsx";
import ContactUsPage from "./components/contactUs/ContactUs.jsx";

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
        <Route path="/explorework" element={<ExploreWork />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}
