import React from "react";
import "./Greeting.css";
// import artistAnimation from "../../assets/images/lottiefiles/artist-lottie-1.json";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { contactPageData } from "../../portfolio.js";
import { Fade } from "react-reveal";

const ContactData = contactPageData.contactSection;

export default function Greeting(props) {
  const theme = props.theme;
  function decodeEmail() {
    var binary = atob(
      "bQBhAGkAbAB0AG8AOgBjAGEAcgByAGkAZQBsAHkAbgBuAGMAdQB0AGgAYgBlAHIAdABAAGcAbQBhAGkAbAAuAGMAbwBtAA=="
    );
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    console.error(String.fromCharCode(...new Uint16Array(bytes.buffer)));
    return String.fromCharCode(...new Uint16Array(bytes.buffer));
  }
  greeting.mailto = decodeEmail();

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

                <div className="greeting-image-div">
                  <img
                    className="carrie-profile-image showMobile"
                    src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                    alt=""
                  />
                </div>
              </div>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              {/* <SocialMedia theme={theme} /> */}
              {
                <div className="button-greeting-div">
                  <Button
                    buttonId="contactMeButton"
                    text="Contact Me"
                    icon=" ✉️ "
                    href={greeting.mailto}
                    newTab={true}
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
            <img
              className="carrie-profile-image hideMobile"
              src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
