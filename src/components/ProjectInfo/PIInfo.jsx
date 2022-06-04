import "../../styles/piinfo.css"
import photo1 from "../../imgs/piinfo--photo1.png"
import photo2 from "../../imgs/piinfo--photo2.png"
import photo3 from "../../imgs/piinfo--photo3.png"
import video from "../../imgs/piinfo--video.mp4"
import React from "react"
import { Link } from "react-router-dom"
import Footer from "../4-container/Footer"

export default function PIInfo() {
  const videoDiv = React.createRef()

  return (
    <>
      <div className="piinfo">
        <div className="piinfo--textdiv">
          <p className="piinfo--uptitle">Challenging Ordianry</p>
          <div className="piinfo--title--num">
            <p className="piinfo--num">(1)</p>
            <h1 className="piinfo--title">Ordinary 2.0</h1>
          </div>
          <div className="piinfo--subtextdiv">
            <p className="piinfo--subtext">
              Oridnary is a Gothenburg-based 
              creative development studio. Through 
              technology and design they differentiate 
              artists, creatives and brands to help them 
              break through the noise. Oridnary likes to 
              challenge the ordinary.
            </p>
            <div className="piinfo--services">
              <h2>Services</h2>
              <p>Production/</p>
              <p>Art Direction/</p>
              <p>Set Design/</p>
              <p>Video/</p>
            </div>
          </div>
        </div>

        <div className="piinfo--slider">
          <div className="piinfo--photos">
            <img src={photo1} alt="1" />
            <img className="piinfo--photo2" src={photo2} alt="2" />
            <img src={photo3} alt="3" />
          </div>
        </div>
        <p className="piinfo--lastwords">Challenging Ordianry</p>

        <div className="piinfo--div--video">
          <div className="piinfo--container">
            <video className="piinfo--video" autoPlay muted loop ref={videoDiv}>
              <source src={video} type="video/mp4" />
            </video>
            <div className="piinfo--videofunc">
              <p className="piinfo--playstop">
                <span onClick={() => videoDiv.current.play()}>play</span> / <span onClick={() => videoDiv.current.pause()}>stop</span>
              </p>
              <p className="piinfo--videofull">
                <span onClick={() => videoDiv.current.requestFullscreen()}>enter fullscreen</span>
              </p>
            </div>
            <Link className="piinfo--nextproj" to="/project-info">
              Next Project
            </Link>
          </div>
          
          <Footer 
            footer="footer black" 
            allRights="all--rights black"
            findUs="findus--text black"
            link1="link1 black"
            link2="link2 black"
          />
        </div>
      </div>
    </>
  )
}