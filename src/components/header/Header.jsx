import Circle from "./Circle";
import NavLink from "./NavLink";
import PurpleBox from "./PurpleBox";

const Header = () => {
	return (
		<>
			<div className="boxHeader">
				<Circle />
				<NavLink />
			</div>
			<PurpleBox />
		</>
	);
};

export default Header;
