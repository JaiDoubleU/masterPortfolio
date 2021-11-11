import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PaintingCard from "../../components/paintingsCard/PaintingCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { galleryHeader, paintingsHeader } from "../../portfolio.js";
// import ProjectsData from "../../shared/opensource/projects.json";
import PaintingData from "../../shared/paintings.json";
import "./Originals.css";
import OriginalsImg from "./OriginalsImg";

class Originals extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="gallery-main">
        <Header theme={theme} />
        <div className="basic-gallery">
          <Fade bottom duration={2000} distance="40px">
            <div className="gallery-heading-div">
              <div className="gallery-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${galleryHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <GalleryImg theme={theme} />
              </div>
              <div className="gallery-heading-text-div">
                <h1
                  className="gallery-heading-text"
                  style={{ color: theme.text }}
                >
                  {galleryHeader.title}
                </h1>
                <p
                  className="gallery-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {galleryHeader["description"]}
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
                <h1
                  className="paintings-heading-text"
                  style={{ color: theme.text }}
                >
                  {paintingsHeader.title}
                </h1>
                <p
                  className="gallery-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {paintingsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="repo-cards-div-main">
          {PaintingData.data.map((repo) => {
            return <PaintingCard repo={repo} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Gallery;