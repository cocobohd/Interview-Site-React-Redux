import React from "react";
import "../../styles/header.css"
import { burgerMenu } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"

export default function Header() {
  const isBurgerActive = useSelector((store) => store.headerReducer.burgerActive)
  const dispatch = useDispatch()

  function burger() {
    dispatch(burgerMenu())
  }

  return (
    <header className="header">
      <p className="logo">
        INTERVIEW
      </p>
      <div className={isBurgerActive ? "burger-menu active" : "burger-menu"} onClick={() => burger()}>
          <p className="burger-line" />
      </div>
    </header> 
  )
}