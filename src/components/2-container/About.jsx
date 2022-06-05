import React from "react"
import { Link } from "react-router-dom"
import "../../styles/about.css"
import photo1 from "../../imgs/2-container-photo1.png"
import photo2 from "../../imgs/2-container-photo2.png"

export default function About() {
  return (
    <div className="about">
      <div className="photo--info">
        <img src={photo1} alt="1" />
        <div className="about--text">
          <h1 className="about--title">
          Special Photography Studio Based in Berlin, Germany
          </h1>
          <p className="about--subtext">
            Always taking great pleasure in the work we do, 
            we find satisfaction in the simple acts of thinking and making. 
            Since 2005, we’ve worked to build strategies and craft solutions 
            for our collaborators, applying reason and rationality to the process of design.
          </p>
          <div className="about--btn--div">
            <Link className="about--btn" to="/about">About us</Link>
            <p>⟶</p>
          </div>
        </div>
      </div>
      <img className="about--photo2" src={photo2} alt="2" />
    </div>
  )
}