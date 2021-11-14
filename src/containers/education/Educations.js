import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";
import { CSSGrid, layout } from "react-stonecutter";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <CSSGrid
          component="ul"
          columns={5}
          columnWidth={150}
          gutterWidth={5}
          gutterHeight={5}
          layout={layout.pinterest}
          duration={800}
          easing="ease-out"
        >
          <li key="A" itemHeight={150}>
            A
          </li>
          <li key="B" itemHeight={120}>
            B
          </li>
          <li key="C" itemHeight={170}>
            C
          </li>
        </CSSGrid>

        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
