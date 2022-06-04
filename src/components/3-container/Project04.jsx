import React from "react"
import photo1 from "../../imgs/3-container-photo1Project04.png"
import photo2 from "../../imgs/3-container-photo2Project04.png"
import "../../styles/project04.css"
import { Link } from "react-router-dom"

export default function Project04() {
  const imgs = React.createRef()

  function firstPhoto() {
    const imgsDiv = imgs.current
    if(imgsDiv.classList.contains("second")){
      imgsDiv.classList.remove("second")
    }
    if(imgsDiv.classList.contains("third")){
      imgsDiv.classList.remove("third")
    }
    imgsDiv.classList.add("first")
  }

  function secondPhoto() {
    const imgsDiv = imgs.current
    if(imgsDiv.classList.contains("first")){
      imgsDiv.classList.remove("first")
    }
    if(imgsDiv.classList.contains("third")){
      imgsDiv.classList.remove("third")
    }
    imgsDiv.classList.add("second")
  }

  function thirdPhoto() {
    const imgsDiv = imgs.current
    if(imgsDiv.classList.contains("first")){
      imgsDiv.classList.remove("first")
    }
    if(imgsDiv.classList.contains("second")){
      imgsDiv.classList.remove("second")
    }
    imgsDiv.classList.add("third")
  }

  return (
    <div className="project04">
      <div className="project04--info">
        <p className="project04--num">04</p>
        <p className="project04--uptitle">Featured Project</p>
        <img className="img" src={photo1} alt="1" />
        <h1 className="project04--title">Oridnary Challenge</h1>
        <p className="project04--subtext">
          Oridnary is a Gothenburg-based creative development studio.
          Through technology and design they differentiate artists, 
          creatives and brands to help them break through the noise. 
          Oridnary likes to challenge the ordinary.
        </p>
        <button className="project04--btn">
          <Link className="link" to="/project-info" >
            View Project
          </Link>
        </button>
      </div>
      <div className="project04--slider">
        <div className="project04--imgs" ref={imgs}>
          <img className="img2" src={photo2} alt="2" />
          <img className="img2" src={photo2} alt="2" />
          <img className="img2" src={photo2} alt="2" />
        </div>
      <span className="circle1" onClick={() => firstPhoto()}></span>
      <span className="circle2" onClick={() => secondPhoto()}></span>
      <span className="circle3" onClick={() => thirdPhoto()}></span>
      </div>
    </div>
  )
}