import React from "react";
import "../../styles/header.css"
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
  
  // if (offset >= 60) {
  //   const head = header.current
  //   head.classList.add("fixed")
  // } else {
  //   const head = header.current
  //   head.current.classList.remove("fixed")
  // }

  function burger() {
    dispatch(burgerMenu())
  }

  const scroll = () => {
    if(window.scrollY >= 60) {
      console.log("yes")
    }
  }

  return (
    <div className="back--header" onClick={scroll}>
      <header className={offset >= 60 ? "header fixed" : "header"}>
      <p className="logo">
        INTERVIEW
      </p>
      <div className={isBurgerActive ? "burger-menu active" : "burger-menu"} onClick={() => burger()}>
          <p className="burger-line" />
      </div>
      </header>
    </div>
  )
}