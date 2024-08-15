import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

const Header = () => {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	return (
		<div className={styles.header}>
			<Link to="/home" className={styles.logo}>
				Campaignion
			</Link>
			{isLoggedIn ? (
				<NavDropdown
					title={
						<FontAwesomeIcon
							icon={faBookOpen}
							size="lg"
							style={{ marginRight: ".5rem" }}
						/>
					}
					id="headerDropdown"
				>
					<NavDropdown.Item href="/home">Home</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
				</NavDropdown>
			) : null}
		</div>
	);
};

export default Header;
