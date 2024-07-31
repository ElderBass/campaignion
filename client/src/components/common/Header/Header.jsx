import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn }) => {
	return (
		<div className={styles.header}>
			<p className={styles.logo}>Campaignion</p>
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
					<NavDropdown.Item href="/home">
						Home
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.3">
						Logout
					</NavDropdown.Item>
				</NavDropdown>
			) : null}
		</div>
	);
};

export default Header;
