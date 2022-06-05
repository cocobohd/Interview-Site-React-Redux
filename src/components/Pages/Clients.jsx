import HeaderItem from "../1-container/HeaderItem"
import ClintsDiv from "../Clients/ClientsDiv"
import clients from "../Clients/clients"
import photo from "../../imgs/clients--photo.png"
import "../../styles/clients.css"

export default function Clients() {
  const renderClients = clients.map((item) => {
    return <ClintsDiv 
              key = {item.id}
              id = {item.id}
              link = {item.link}
              title = {item.title}
            />
  })

  return (
    <div className="clients">
      <HeaderItem 
        link = "link white"
        burgerLine = "burger-line"
      />
      <div className="clients--all">
        {renderClients}
        <img className="clients--photo" src={photo} alt="1" />
      </div>
    </div>
  )
}