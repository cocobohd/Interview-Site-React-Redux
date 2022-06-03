import "../../styles/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <p className="all--rights">© 2022 - INTERVIEW / All Rights Reserved</p>
      <div className="findus">
        <p className="findus--text">Find us online</p>
        <a className="link1" href="https://www.instagram.com/" rel="noreferrer" target="_blank">Instagram</a>
        <a className="link2" href="https://www.linkedin.com/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </footer>
  )
}