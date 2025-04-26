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
import AntitheftFAQ from "./components/FAQ/AppFAQcomponents/AntitheftFAQ.jsx"
import FirewallFAQ from "./components/FAQ/AppFAQcomponents/FirewallFAQ.jsx"
import PhotovaultFAQ from "./components/FAQ/AppFAQcomponents/PhotovaultFAQ.jsx"
import VpnFAQ from "./components/FAQ/AppFAQcomponents/VpnFAQ.jsx"
import PasswordManagerFAQ from "./components/FAQ/AppFAQcomponents/PasswordManagerFAQ.jsx"
import ApplockFAQ from "./components/FAQ/AppFAQcomponents/ApplockFAQ.jsx"
import PasswordManagerFAQIOS from "./components/FAQ/AppFAQcomponentsIos/PasswordManagerFAQIOS.jsx"
import PhotovaultFAQIOS from "./components/FAQ/AppFAQcomponentsIos/PhotovaultFAQIOS.jsx"
import FirewallApp from "./components/Product/Apps/FirewallApp.jsx"
import AntiTheftApp from "./components/Product/Apps/AntiTheftApp.jsx"
import ApplockApp from "./components/Product/Apps/ApplockApp.jsx"
import VPNApp from "./components/Product/Apps/VPNApp.jsx"
import PassManageApp from "./components/Product/Apps/PassManageApp.jsx"
import PhotovaultApp from "./components/Product/Apps/PhotovaultApp.jsx"
import PrivacyPolicy from "./components/resourcess/PrivacyPolicy.jsx"
import SoftwareDeveloperAndroidPage from "./components/carrier/Jobs/SoftwareDeveloperAndroidPage.jsx"
import SoftwareDeveloperIOSPage from "./components/carrier/Jobs/SoftwareDeveloperIOSPage.jsx"
import SoftwareTesterPage from "./components/carrier/Jobs/SoftwareTesterPage.jsx"

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
				path: "/firewall",
				element: <FirewallApp />,
			},
			{
				path: "/photovault",
				element: <PhotovaultApp />,
			},
			{
				path: "/applock",
				element: <ApplockApp />,
			},
			{
				path: "/antitheft",
				element: <AntiTheftApp />,
			},
			{
				path: "/vpn",
				element: <VPNApp />,
			},
			{
				path: "/password-manager",
				element: <PassManageApp />,
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
				path: "/software-engineer-android",
				element: <SoftwareDeveloperAndroidPage />,
			},
			{
				path: "/software-engineer-ios",
				element: <SoftwareDeveloperIOSPage />,
			},
			{
				path: "/software-test-engineer",
				element: <SoftwareTesterPage />,
			},
	
			{
				path: "/feedback",
				element: <Feedback />,
			},
			{
				path: "/contact",
				element: <Feedback />,
			},
			// {
			// 	path: "/privacy-policy",
			// 	element: <PrivacyPolicy />,
			// },
			{
				path: "/faq",
				element: <FAQPage />,
			},
			{
				path: "/antitheftFAQ",
				element: <AntitheftFAQ />,
			},
			{
				path: "/passwordFAQ",
				element: <PasswordManagerFAQ />,
			},
			{
				path: "/passwordFAQIOS",
				element: <PasswordManagerFAQIOS />,
			},

			{
				path: "/photovaultFAQIOS",
				element: <PhotovaultFAQIOS />,
			},
			{
				path: "/vpnFAQ",
				element: <VpnFAQ />,
			},
			{
				path: "/applockFAQv",
				element: <ApplockFAQ />,
			},
			{
				path: "/photovaultFAQ",
				element: <PhotovaultFAQ />,
			},
			{
				path: "/firewallFAQ",
				element: <FirewallFAQ />,
			},
		],
	},
])
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
