import video from "../../imgs/3-container-video.mp4"
import "../../styles/project02.css"
import React from "react"

export default function Project02() {
  const videoDiv = React.createRef()

  return (
    <div>
      <video className="back--video" autoPlay muted loop ref={videoDiv}>
        <source src={video} type="video/mp4" />
      </video>
      <div className="project02">
        <div className="project02--info">
            <p className="project02--number">02</p>
            <p className="project02--uptext">Featured Project</p>
            <h1 className="project2--title">Project Title</h1>
            <p className="project02--subtext">
              Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.
            </p>
            <button className="project02--btn">View Project</button>
        </div>
        <p className="playStop"><span onClick={() => videoDiv.current.play()}>play</span> / <span onClick={() => videoDiv.current.pause()}>stop</span></p>
      </div>
    </div>
    
  )
}