import React from "react";
import "./PaintingCard.css";
import { Fade } from "react-reveal";

export default function PaintingCard({ painting, theme }) {
  function openPaintinginNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={2000} distance="40px">
      <div
        className="painting-card-div"
        key={painting.id}
        onClick={() => openPaintinginNewTab(painting.url)}
        style={{ backgroundColor: theme.highlight }}
      >
        <img
          width="55%"
          class="painting img-responsive"
          src={require(`../../assets/paintings/${painting["url"]}`)}
          alt=""
        />
        <div className="painting-name-div">
          <p className="painting-name" style={{ color: theme.text }}>
            {painting.name}
          </p>
        </div>
        <p className="painting-description" style={{ color: theme.text }}>
          {painting.description}
        </p>
        <div className="painting-details">
          {/* <p
              className="painting-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {painting.createdAt.split("T")[0]}
            </p> */}
        </div>
        {/* <div className="painting-stats">
          <div className="painting-left-stat">
            <span>
              <div className="language-color" style={{ backgroundColor: painting.node.primaryLanguage.color }}></div>
              <p>{painting.node.primaryLanguage.name}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className="painting-star-svg">
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{painting.node.forkCount}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className="painting-star-svg">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              <p>{painting.node.stargazers.totalCount}</p>
            </span>
          </div>
          <div className="painting-right-stat">
            <p>{painting.node.diskUsage} KB</p>
          </div>
        </div> */}
      </div>
    </Fade>
  );
}
