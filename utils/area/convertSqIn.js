export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 6.4516).toString()
    case 'SqM':
      return (Number(text) * 0.00064516).toString()
    case 'Ha':
      return (Number(text) * 0.000000064516).toString()
    case 'SqKm':
      return (Number(text) * 0.00000000064516).toString()
    case 'SqIn':
      return text
    case 'SqFt':
      return (Number(text) * 0.00694).toString()
    case 'SqYd':
      return (Number(text) * 0.0007716).toString()
    case 'Acre':
      return (Number(text) * 0.000000159).toString()
    case 'SqMile':
      return (Number(text) * 0.000000000249).toString()
    default:
      alert('Select To Unit')
  }
}
