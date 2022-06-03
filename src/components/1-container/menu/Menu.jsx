import "../../../styles/menu.css"
import Footer from "../../4-container/Footer"

export default function Menu({isVisible}) {
  return (
    <div className={isVisible ? "menu visible" : "menu"}>
      <div className="menu--all--divs">
        <div className="menu--container">
        <div className="menu--div">
          <p className="menu--num">(1)</p>
          <h1 className="menu--title">About</h1>
        </div>
        </div>
        <div className="menu--container">
          <div className="menu--div">
            <p className="menu--num">(2)</p>
            <h1 className="menu--title">Projects</h1>
          </div>
        </div>
        <div className="menu--container">
          <div className="menu--div">
            <p className="menu--num">(3)</p>
            <h1 className="menu--title">Clients</h1>
          </div>
        </div>
        <div className="menu--container last">
          <div className="menu--div">
            <p className="menu--num">(4)</p>
            <h1 className="menu--title">Contact</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}