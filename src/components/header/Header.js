import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    //const logoPath = greeting["logo_path"];
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header
            className="header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <NavLink to={link} tag={Link} className="logo">
              <img
                src={require(`../../assets/images/${greeting["logo_path"]}`)}
                className="carrieLogo"
                height="75%"
                alt="Carrie Cuthbert's Signature Logo"
              />

              {/* < img src = "/Users/shannonj/git/JaiDoubleU/carriePortfolio/src/assets/images/carrie-signature.svg"/> */}
              {/* <span style={{ color: theme.text }}> </span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}></span> */}
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  style={{ color: theme.text }}
                  activeStyle={{
                    fontWeight: "bold",
                    backgroundColor: theme.highlight,
                  }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>

              {/* <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/gallery"
                  tag={Link}
                  activeStyle={{
                    fontWeight: "bold",
                    backgroundColor: theme.highlight,
                  }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Originals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/prints"
                  tag={Link}
                  activeStyle={{
                    fontWeight: "bold",
                    backgroundColor: theme.highlight,
                  }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Prints
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{
                    fontWeight: "bold",
                    backgroundColor: theme.highlight,
                  }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
