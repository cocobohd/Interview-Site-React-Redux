import HeaderItem from "../1-container/HeaderItem"
import ProjectItem from "../Projects/ProjectItem"
import clients from "../Clients/clients"
import "../../styles/projects.css"

export default function Projects() {
  const renderProjects = clients.map(item => {
    return <ProjectItem 
            key = {item.id}
            id = {item.id}
            title = {item.title}
            photo = {item.photo}
           />
  })

  return (
    <div className="projects">
      <HeaderItem 
        link = "link white projects"
        burgerLine = "burger-line"
      />
      {renderProjects}
    </div>
  )
}