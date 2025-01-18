import { Route, Routes } from "react-router";
import HomePage from "./pages/home";

import PhotoReels from "./pages/photoreel";
import Header from "./components/header";

import Footer from "./components/footer";
import PortfolioPage from "./pages/portfolio";
import IndividualPortfoli from "./pages/portfolio/individualPortfolio";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <div className="pt-[65px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
			<Route path="/portfolio/:id" element={<IndividualPortfoli />} />
            <Route path="/photo-reels" element={<PhotoReels />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
