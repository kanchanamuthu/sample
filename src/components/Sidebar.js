import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import './Sidebar.scss';

const SidebarNav = styled.nav`
right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;




const Sidebar = () => {
const [sidebar, setSidebar] = useState(false);

const showSidebar = () => setSidebar(!sidebar);

return (
	<>
	<IconContext.Provider value={{ color: "#fff" }}>
		<div className="Nav-style">
		<Link to="#" className="Link-style">
        <FaIcons.FaBars onClick={showSidebar} />
		</Link>
		</div>
		<SidebarNav sidebar={sidebar} className="sidebarNav-style">
		<sidebarWrap className="sidebarWrap-style"> 
		{SidebarData.map((item, index) => {
			return <SubMenu item={item} key={index} />;		
		})}
		</sidebarWrap>
		</SidebarNav>
    </IconContext.Provider>
	</>
);
};

export default Sidebar;
