import HeaderItem from "../1-container/HeaderItem"
import "../../styles/projectinfo.css"
import PIInfo from "../ProjectInfo/PIInfo"

export default function ProjectInfo() {
  return (
    <>
      <div className="projectInfo">
        <HeaderItem 
          link = "link white"
          burgerLine = "burger-line"
        />
      </div>
      <PIInfo />
    </>
  )
}