import Navbar from "./components/Navbar"
import {Outlet} from "react-router-dom"
import Footer from "./components/footer"

function App() {
	return (
		<>
			<div className="bg-[#000A1B]">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
