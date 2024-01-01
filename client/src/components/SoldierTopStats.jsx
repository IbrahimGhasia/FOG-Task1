/* eslint-disable react/prop-types */
import { useState } from "react";

const SoldierTopStats = ({ type, name, kills, url }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="p-2 bg-_gray hover:bg-white group relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<p className="text-gray-400 text-xs font-extralight group-hover:text-black uppercase">
				{type}
			</p>
			<div className="flex justify-center items-center group my-4">
				<img
					src={isHovered ? `${url}-black.png` : `${url}-white.png`}
					className="object-cover w-fit h-full"
					alt="Image"
				/>
			</div>

			<div className="absolute bottom-0 mb-1">
				<p className="text-white font-medium text-sm group-hover:text-black">
					{name}
				</p>
				<p className="text-gray-400 text-xs font-thin">{kills} kills</p>
			</div>
		</div>
	);
};
export default SoldierTopStats;
