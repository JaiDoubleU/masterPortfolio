import React from "react";
import "./Greeting.css";
import artistAnimation from "../../assets/images/lottiefiles/artist-lottie-1.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div
                className="greeting-text"
                style={{ color: theme.secondaryText }}
              >
                {greeting.title}
              </div>
              <div
                className="greeting-nickname"
                style={{ color: theme.secondaryText }}
              >
                {greeting.nickname}
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              {
                <div className="button-greeting-div">
                  <Button
                    text="Contact Me"
                    icon=" ✉️ "
                    newTab={true}
                    href={greeting.mailto}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                  {/* <Button text="Contact me" href="#contact" /> */}
                  {/* <Button text="See my resume" newTab={true} href={greeting.resumeLink} /> */}
                </div>
              }
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={artistAnimation} />
            ) : (
              <img
                alt="saad sitting on table"
                src={require("../../assets/images/feelingProud.svg")}
              ></img>
            )}

            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
