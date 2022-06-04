import "../../styles/project01.css"
import photo from "../../imgs/3-container-photoProject01.png"
import { Link } from "react-router-dom"

export default function Project01() {
  return (
    <div className="project01">
      <div className="project01--info">
        <p className="project01--uptext">Featured Project</p> 
        <div>
          <h1 className="project01--title">Project Title</h1>
          <p className="project01--subtext">
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
          <button className="project01--btn">
            <Link className="link" to="/project-info" >
              View Project
            </Link>
          </button>
        </div>
      </div>
      
      <div className="project01--img--number">
        <p className="project01--number">01</p>
        <img className="project01--img" src={photo} alt="1" />
      </div>
    </div>
  )
}