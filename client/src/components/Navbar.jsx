import { NAVLINKS } from "../constants/NavLinks";

const Navbar = () => {
	return (
		<div>
			<div className="flex items-center justify-between py-6">
				<div className="flex items-center gap-5 text-gray-500 text-xl border-b w-[900px] 2xl:w-[1200px] border-gray-700 font-normal">
					{NAVLINKS.map((link, index) => (
						<a
							key={index}
							href={link.link}
							className={`hover:text-white ${
								index === 3
									? "border-b-2 font-bold text-white"
									: null
							}`}
						>
							{link.label}
						</a>
					))}
				</div>

				<div className="w-56">
					<img src="level-wrapper.svg" />
				</div>
			</div>
		</div>
	);
};
export default Navbar;
