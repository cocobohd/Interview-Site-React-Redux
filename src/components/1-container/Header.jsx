import React from "react";
import "../../styles/header.css"
import Menu from "./menu/Menu";
import { burgerMenu } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

export default function Header() {
  const isBurgerActive = useSelector((store) => store.headerReducer.burgerActive)
  const dispatch = useDispatch()
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

  return (
    <div className="back--header">
      <header className={offset >= 60 ? "header fixed" : "header"}>
      <p className="logo">
        INTERVIEW
      </p>
      <div className={isBurgerActive ? "burger-menu active" : "burger-menu"} onClick={() => burger()}>
          <p className="burger-line" />
      </div>
      </header>
      <Menu isVisible={isBurgerActive}/>
    </div>
  )
}