import HeaderItem from "../1-container/HeaderItem"
import ContactItem from "../Contact/ContactItem"
import servicesArr from "../ServicesItem/servicesArr"
import ServicesItem from "../ServicesItem/ServicesItem"
import photo1 from "../../imgs/aboutus--photo1.png"
import photo2 from "../../imgs/aboutus--photo2.png"
import photo3 from "../../imgs/aboutus--photo3.png"
import { Link } from "react-router-dom"
import "../../styles/aboutus.css"

export default function About() {
  const renderServices = servicesArr.map(item => {
    return <ServicesItem 
              key = {item.id}
              title = {item.title}
              subtext = {item.subtext}
           />
  })

  return (
    <div className="aboutus">
      <HeaderItem 
        link = "link black"
        burgerLine = "burger-line black"
      />
      <div className="aboutus--text">
        <div className="aboutus--info">
          <h1 className="aboutus--title">Learn About Our Special Approach</h1>
          <p className="aboutus--subtext">Our process is collaborative and iterative. 
            With every new project, we take the time to listen to the needs 
            of our partners in order to build a body of work from first principles. 
            We divide the work into three phases, in which the head and the hand are always present: 
            understanding, thinking and making. In every phase we present developments for review and 
            feedback before progressing on to the next.
          </p>
          <p className="aboutus--subtext2">
            A selection of our clients are Aller Media, 
            Björkholmen Gallery, Bonnier, Breakit, Coop, Erik Penser Bank, 
            Galleri Magnus Karlsson, Max, Neuro, Swedish Committee for Afghanistan, 
            Unesco and Unicef.
          </p>
          <Link className="aboutus--contact" to="/contact">Contact</Link>
        </div>
        <img className="aboutus--photo1" src={photo1} alt="1" />
        <img className="aboutus--photo2" src={photo2} alt="2" />
      </div>
      <div className="aboutus--services">
        <img className="aboutus--photo3" src={photo3} alt="3" />
        <div className="aboutus--servicestext">
          <h1 className="aboutus--services--title">Services</h1>
          <div className="aboutus--services--container">
            {renderServices}
          </div>
        </div>
      </div>
      <ContactItem />
    </div>
  )
}