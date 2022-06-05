export default function ServicesItem(prop) {
  return (
    <div className="aboutus--services--items">
      <h1>{prop.title}</h1>
      <p>
        {prop.subtext}
      </p>
    </div>
  )
}