import "../../../styles/menu.css"
import Footer from "../../4-container/Footer"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { burgerMenu } from "../../../store/actions"

export default function Menu({isVisible}) {
  const dispatch = useDispatch()
  function burger() {
    dispatch(burgerMenu())
  }

  return (
    <>
      <div className={isVisible ? "menu visible" : "menu"}>
        <div className="menu--all--divs">
          <div className="menu--container">
          <div className="menu--div">
            <p className="menu--num">(1)</p>
            <h1 className="menu--title">
              <Link className="link" to="/about" onClick={() => burger()}>About</Link>
            </h1>
          </div>
          </div>
          <div className="menu--container">
            <div className="menu--div">
              <p className="menu--num">(2)</p>
              <h1 className="menu--title">
                <Link className="link" to="/projects" onClick={() => burger()}>Projects</Link>
              </h1>
            </div>
          </div>
          <div className="menu--container">
            <div className="menu--div">
              <p className="menu--num">(3)</p>
              <h1 className="menu--title">
                <Link className="link" to="/clients" onClick={() => burger()}>Clients</Link>
              </h1>
            </div>
          </div>
          <div className="menu--container last">
            <div className="menu--div">
              
              <p className="menu--num">(4)</p>
              <h1 className="menu--title">
                <Link className="link" to="/contact" onClick={() => burger()}>Contact</Link>
              </h1>
            </div>
          </div>
        </div>
        <Footer 
          footer="footer"
          allRights="all--rights"
          findUs="findus--text"
          link1="link1"
          link2="link2"
        />
      </div>
    </>
    
  )
}