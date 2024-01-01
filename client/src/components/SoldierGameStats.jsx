/* eslint-disable react/prop-types */
const SoldierGameStats = ({ wins, scorePerMin, killsPerMin }) => {
	return (
		<div className="w-80">
			<div className="flex justify-between text-white uppercase">
				<div>
					<p className="text-xs font-semibold">wins</p>
					<h3 className="text-2xl font-extrabold">{wins}%</h3>
				</div>
				<div>
					<p className="text-xs font-semibold">score/min</p>
					<h3 className="text-2xl font-extrabold">{scorePerMin}</h3>
				</div>
				<div>
					<p className="text-xs font-semibold">kills/min</p>
					<h3 className="text-2xl font-extrabold">{killsPerMin}</h3>
				</div>
			</div>
		</div>
	);
};
export default SoldierGameStats;
