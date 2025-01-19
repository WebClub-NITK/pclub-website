import { Route, Routes } from "react-router"
import HomePage from "./pages/home"

import PhotoReels from './pages/photoreel'
import Header from "./components/header"

import Footer from "./components/footer"
import PortfolioPage from "./pages/portfolio"
import { ThemeProvider } from "./context/ThemeContext"

export default function App() {
	return (
		<div>
			<ThemeProvider>
				<div className="bg-complementPrimary">
					<Header />
					<div className="pt-[65px]">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/portfolio" element={<PortfolioPage />} />
							<Route path="/photo-reels" element={<PhotoReels />} />
						</Routes>
					</div>
					<Footer />
				</div>
			</ThemeProvider>
		</div>
	)
}
