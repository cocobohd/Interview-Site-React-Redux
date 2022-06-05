import { Link } from "react-router-dom"

export default function ProjectItem(prop) {
  return (
    <div className={prop.photo}>
      <div className="projects--info">
        <h1 className="projects--title">Project Title</h1>
        <div className="projects--text">
          <div className="projects--numname">
            <p>0{prop.id}</p>
            <p>{prop.title}</p>
          </div>
          <p className="projects--subtext">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="projects--view" to="/project-info">View Project</Link>
        </div>
      </div>
    </div>
  )
}