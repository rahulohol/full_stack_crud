import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Tabs to="/" exact>
          All users
        </Tabs>
        <Tabs to="add" exact>
          Add user
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
