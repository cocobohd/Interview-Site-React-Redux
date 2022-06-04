import "../../styles/footer.css"

export default function Footer(prop) {
  return (
    <footer className={prop.footer}>
      <p className={prop.allRights}>© 2022 - INTERVIEW / All Rights Reserved</p>
      <div className="findus">
        <p className={prop.findUs}>Find us online</p>
        <a className={prop.link1} href="https://www.instagram.com/" rel="noreferrer" target="_blank">Instagram</a>
        <a className={prop.link2} href="https://www.linkedin.com/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </footer>
  )
}