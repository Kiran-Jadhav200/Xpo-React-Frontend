import Hero from "../components/Hero"
import ClientSays from "../components/ClientSays"
import ContinuousScroll from "../components/ContinousScroll"
import ProductsandServices from "../components/ProductsandServices"
import Results from "../components/Results"
import CostomerTestemonials from "../components/CostomerTestemonials"
import LastSection from "../components/LastSection"

export default function Home() {
	return (
		<div>
			<Hero />
			<ContinuousScroll />
			<Results />
			<ProductsandServices />
			<ClientSays />
			<CostomerTestemonials />
			<LastSection />
		</div>
	)
}
