import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import Sidebar from "../Sidebar/index";

// import SubHeader from "@/components/Header/subHeader";

const Layout = ({ children, id }) => {


	return (
		<div id={id}>
			<div className="d-flex position-fixed vw-100 vh-100">
				{/* <div className="d-none d-lg-block ">
					<Sidebar />
				</div> */}
				<div className="w-100 overflow-auto d-flex justify-content-between flex-column mt-3">
					<div>
						<Header />

						{children}

						<Footer />

					</div>
					{/* <div className=" mt-5">
						<h6 className="text-center">'</h6>
					</div> */}
				</div>

			</div>
		</div>
	);
};

export default Layout;
