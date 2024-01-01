/* eslint-disable react/prop-types */
const Soldier_Menu = ({ name, score, total }) => {
	const per = (score / total) * 100;
	const percentage = per.toFixed(0);
	const value = parseInt(percentage);

	return (
		<div className="border-t border-gray-500 p-3 group hover:bg-white flex justify-between items-center cursor-default w-64">
			<p className="text-xs font-semibold text-white group-hover:text-black uppercase">
				{name}
			</p>
			<div className="w-20">
				<div className="text-xs font-medium text-right mb-1 text-white group-hover:text-black">
					{score}/{total}
				</div>
				<div className="w-full bg-_gray h-1">
					<div className={`bg-_yellow h-1 w-[30%]`}></div>
				</div>
			</div>
		</div>
	);
};
export default Soldier_Menu;
