import { Fragment, useEffect } from "react";
import LeftSide from "../../containers/leftSidebar";
import Chitchat from "../../containers/chatBoard";
import RightSide from "../../containers/rightSidebar";
import ThemeCustomizer from "../../containers/themeCustomizer";


function Messenger() {
	useEffect(() => {
		document.body.classList.add("sidebar-active");
	}, [])
	return (
		<Fragment>
			<div className="chitchat-container sidebar-toggle ">
				<LeftSide />
				<Chitchat />
				<RightSide />
			</div>
			<ThemeCustomizer />
		</Fragment>
	);
}
export default Messenger;
