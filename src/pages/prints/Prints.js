import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PaintingCard from "../../components/paintingsCard/PaintingCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { printsHeader } from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json";
import PaintingData from "../../shared/paintings.json";
import "./Prints.css";
// import GalleryImg from "./GalleryImg";

class Prints extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="prints-main">
        <Header theme={theme} />
        <div className="basic-gallery">
          <Fade bottom duration={2000} distance="40px">
            <div className="prints-heading-div">
              {/* <div className="prints-heading-img-div">
                <printsImg theme={theme} />
              </div> */}
              <div className="prints-heading-text-div">
                <h1
                  className="prints-heading-text"
                  style={{ color: theme.text }}
                >
                  {printsHeader.title}
                </h1>
                <p
                  className="prints-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {printsHeader["description"]}
                </p>
                <p
                  className="prints-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {printsHeader["price"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Paintings  */}

        <div className="basic-gallery">
          <Fade bottom duration={2000} distance="40px">
            <div className="paintings-heading-div">
              <div className="paintings-heading-text-div">
                {/* <h1
                  className="paintings-heading-text"
                  style={{ color: theme.text }}
                >
                  {paintingsHeader.title}
                </h1> */}
                {/* <p
                  className="gallery-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {paintingsHeader["description"]}
                </p> */}
              </div>
            </div>
          </Fade>
        </div>

        <div className="painting-cards-div-main ">
          {PaintingData.data.originals.map((painting) => {
            return <PaintingCard painting={painting} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Prints;
