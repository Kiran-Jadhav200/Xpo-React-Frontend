import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductPage.js"
import NewsPage from "./Pages/NewsPage.jsx"
import CareersPage from "./Pages/CareersPage.jsx"
import Feedback from "./components/resourcess/FeedBack.jsx"
import FAQPage from "./Pages/FAQPage.jsx"
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <h1>404</h1>,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/about",
				element: <AboutPage />,
			},
			{
				path: "/products",
				element: <ProductPage />,
			},
			{
				path: "/news",
				element: <NewsPage />,
			},
			{
				path: "/careers",
				element: <CareersPage />,
			},
			{
				path: "/feedback",
				element: <Feedback />,
			},
			{
				path: "/contact",
				element: <Feedback />,
			},
			{
				path: "/faq",
				element: <FAQPage />,
			},
		],
	},
])
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
