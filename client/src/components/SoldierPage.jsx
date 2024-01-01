import { useEffect, useState } from "react";
import SoldierGameStats from "./SoldierGameStats";
import SoldierMenu from "./SoldierMenu";
import SoldierTopStats from "./SoldierTopStats";

const SoldierPage = () => {
	const [soldierData, setSoldierData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/soldier"
				);
				const data = await response.json();
				setSoldierData(data.data[0]);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	console.log(soldierData);

	return (
		<div className="grid grid-cols-10 mt-6">
			<div className="col-span-3">
				<img
					src="/soldier__look.png"
					className="w-96 h-full object-cover relative"
				/>
			</div>

			<div className="mt-12 col-span-7">
				<img src="/soldier__info.png" className="w-96 object-cover" />

				<div className="flex mt-10">
					<div className="">
						{soldierData &&
							soldierData.soldier.menu.map((data, index) => (
								<SoldierMenu
									key={index}
									name={data.name}
									score={data.score}
									total={data.total}
								/>
							))}
					</div>

					<div className="w-full mx-10">
						<div>
							{soldierData && (
								<SoldierGameStats
									wins={soldierData.soldier.gameStats.wins}
									scorePerMin={
										soldierData.soldier.gameStats
											.scorePerMin
									}
									killsPerMin={
										soldierData.soldier.gameStats
											.killsPerMin
									}
								/>
							)}
						</div>

						{soldierData && (
							<div className="grid grid-cols-2 gap-2 mt-10 w-[450px]">
								{soldierData.soldier.gameStats.topStats.map(
									(data, index) => (
										<SoldierTopStats
											key={index}
											type={data.type}
											name={data.name}
											kills={data.kills}
											url={data.image_url}
										/>
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default SoldierPage;
