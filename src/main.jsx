import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import HomePage from "./Pages/HomePage"
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom"
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
		],
	},
])
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
