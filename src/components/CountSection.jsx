const CountSection = ({ numButtonClicked }) => {
  return (
    <div>
      <p>Botões clicados:</p>
      <ul>
        {numButtonClicked.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  )
}

export default CountSection
