import HeaderItem from "../1-container/HeaderItem"
import ContactItem from "../Contact/ContactItem"
import "../../styles/contact.css"

export default function Contact() {
  return (
    <div className="contact">
      <HeaderItem 
        link = "link black"
        burgerLine = "burger-line black"
      />
      <ContactItem />
    </div>
  )
}