import React, { useState, useEffect } from "react";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { openSource } from "../../portfolio";

export default function Projects() {
  const [repo, setrepo] = useState([]);

  useEffect(() => {}, []);

  // return (
  //   <div className="main" id="opensource">
  //     <h1 className="project-title">Open Source Projects</h1>
  //     <div className="repo-cards-div-main">
  //       {repo.map((v, i) => {
  //         return <GithubRepoCard repo={v} key={v.node.id} />;
  //       })}
  //     </div>
  //     <Button
  //       text={"More"}
  //       className="project-button"
  //       href="https://github.com/ashutosh1919"
  //       newTab={true}
  //     />
  //   </div>
  // );
}
