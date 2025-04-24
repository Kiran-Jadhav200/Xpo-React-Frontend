import React from "react"
import FaqHero from "../components/FAQ/FaqHero.jsx"
import QuestionsAndAnswers from "../components/FAQ/QuestionsAndAnswers.jsx"
import AppList from "../components/FAQ/AppList.jsx"

const FAQPage = () => {
	return (
		<div>
			<FaqHero />
			{/* <QuestionsAndAnswers /> */}
			<AppList />
		</div>
	)
}

export default FAQPage
