import React, {useRef} from "react"
import {Link} from "react-router-dom"

// Example articles data
const articles = [
	{
		id: 1,
		title: "3 Best Password Manager Apps for Android",
		excerpt:
			"14 September 2024 | Android, Password Manager\n\nThe Xproguard Password Manager is mentioned in the 3 Best Password Manager Apps for Android in 2024 by Kenta Pogo on YouTube.",
		image:
			"https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Orange%20And%20Purple%20Attractive%20YouTube%20T-5079852.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
		url: "https://example.com/article1",
	},
	{
		id: 2,
		title: "15 Best Free Firewall Apps For Android in 2024",
		excerpt:
			"23 February 2024 | Android, Firewall\n\nThe Xproguard Firewall is mentioned in the 15 Best Firewall Apps for Android in 2024 by Amarnath Chakraborty at techviral.net.",
		image:
			"https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Firewall-apps-for-Android.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
		url: "https://example.com/article2",
	},
	{
		id: 3,
		title: "Top 15 Firewall Apps",
		excerpt:
			"11 November 2023 | Android, Firewall\n\nThe Xproguard Firewall is mentioned in the Top 15 Firewall Apps for Android by Rahul Verma at techdator.net.",
		image:
			"https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Yellow%20%26%20Orange%20Modern%20Marketing%20Courses%20YouTu.png/:/rs=w:540",
		url: "https://example.com/article3",
	},
	{
		id: 4,
		title: "5 Best Firewall Apps to Secure Android Phones (2023)",
		excerpt:
			"10 March 2023 | Android, Firewall\n\nThe Xproguard Firewall is mentioned in the 5 Best Firewall Apps for Android by Cуɓσɾɡ at naijaknowhow.net.",
		image:
			"https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/best%20firewall.png/:/rs=w:540",
		url: "https://example.com/article4",
	},
	{
		id: 5,
		title: "The 5 Best Firewall Apps to Secure Your Android Phone",
		excerpt:
			"15 January 2022 | Android, Firewall\n\nThe Xproguard Firewall is mentioned in the 5 Best Firewall Apps for Android by Rishabh Chauhan at makeuseof.com.",
		image:
			"https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/Firewall-Apps-For-Android%20(1).jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
		url: "https://example.com/article5",
	},
]

// ArticleCard Component
function ArticleCard({article}) {
	return (
		<div className="rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border-2 border-gray-800">
			<img
				src={article.image}
				alt={article.title}
				className="w-full h-64 object-cover"
			/>
			<div className="p-6">
				<h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
				<p className="text-gray-300 mb-4 whitespace-pre-line">
					{article.excerpt}
				</p>
				<Link
					to={`/article/${article.id}`}
					className="text-blue-600 font-medium hover:underline"
				>
					Read more →
				</Link>
			</div>
		</div>
	)
}

// NewsHero Component
function NewsHero() {
	const articlesRef = useRef(null)

	const scrollToArticles = () => {
		if (articlesRef.current) {
			articlesRef.current.scrollIntoView({behavior: "smooth"})
		}
	}

	return (
		<div className="text-gray-100 font-sans">
			{/* Hero Section */}
			<section className="relative h-[20vh] mt-5 flex items-center justify-center overflow-hidden">
				{/* Blurred Gradient Glow */}
				<div className="absolute inset-0 z-0 flex justify-center items-center">
					<div className="w-[300px] h-[300px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 blur-3xl rounded-full"></div>
				</div>

				{/* Heading */}
				<div className="relative z-10 text-center">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-white">
						News
					</h1>
				</div>
			</section>

			{/* Articles Section */}
			<main ref={articlesRef} className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
				<div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<ArticleCard key={article.id} article={article} />
					))}
				</div>
			</main>
		</div>
	)
}

export default NewsHero
