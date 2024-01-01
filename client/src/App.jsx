import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/Navbar";
import SoldierPage from "./components/SoldierPage";

function App() {
	return (
		<div className="bg-backgroundImage h-screen w-screen object-cover">
			<div className="h-screen w-screen justify-center items-center backdrop-brightness-50">
				<MaxWidthWrapper>
					<Navbar />
					<SoldierPage />
				</MaxWidthWrapper>
			</div>
		</div>
	);
}

export default App;
