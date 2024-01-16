import React from "react";

interface NavProps {
	userName: string;
}

const Nav: React.FC<NavProps> = ({ userName }) => {
	return (
		<nav
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				backgroundColor: "#333",
				padding: "10px",
				color: "#fff",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div>{userName}</div>
			<a href="https://www.linkedin.com/in/tiwarivaibhav0/" style={{
                color:"#fff"
            }} target="_blank" rel="noreferrer" >Linkedin</a>
		</nav>
	);
};

export default Nav;
