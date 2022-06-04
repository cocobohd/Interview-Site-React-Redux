import "../../styles/project03.css"
import photo from "../../imgs/3-container-photoProject03.png"
import { Link } from "react-router-dom"

export default function Project03() {
  return (
    <div className="project03--back">
      <div className="project03">
        <div className="project03--info">
          <p className="project03--number">03</p>
          <div>
            <p className="project03--uptext">Featured Project</p>
            <h1 className="project3--title">Project Title</h1>
            <p className="project03--subtext">
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
            <button className="project03--btn">
              <Link className="link white" to="/project-info" >
                View Project
              </Link>
            </button>
          </div>
        </div>
        <img src={photo} alt="3" />
      </div>
    </div>
  )
}