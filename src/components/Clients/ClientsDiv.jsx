export default function ClintsDiv(prop) {
  return (
    <div className="clients--container">
      <div className="clients--div">
        <p className="clients--num">({prop.id})</p>
        <h1 className="clients--text">
          <a href={prop.link} className="clients--title" rel="noreferrer" target="_blank">
            {prop.title}
          </a>
        </h1>
      </div>
    </div>
  )
}