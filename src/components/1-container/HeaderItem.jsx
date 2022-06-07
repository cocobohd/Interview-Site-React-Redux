import React from "react";
import "../../styles/header.css"
import Menu from "./menu/Menu";
import { burgerMenu } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function HeaderItem(prop) {
  const dispatch = useDispatch()
  const isBurgerActive = useSelector((store) => store.headerReducer.burgerActive)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  function burger() {
    dispatch(burgerMenu())
  }

  function closeBurger() {
    if (isBurgerActive === true) {
      dispatch(burgerMenu())
    }
  }
  return (
    <>
      <header className={offset >= 60 || isBurgerActive ? "header fixed" : "header"}>
        <p className="logo">
          <Link className={prop.link} to="/home" onClick={() => closeBurger()}>INTERVIEW</Link> 
        </p>
        <div className={isBurgerActive ? "burger-menu active" : "burger-menu"} onClick={() => burger()}>
            <p className={prop.burgerLine} />
        </div>
      </header>
      <Menu isVisible={isBurgerActive}/>
    </>
  )
}