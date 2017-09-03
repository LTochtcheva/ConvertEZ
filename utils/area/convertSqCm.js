export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return text
    case 'SqM':
      return (Number(text) * 0.0001).toString()
    case 'Ha':
      return (Number(text) * 0.000000010).toString()
    case 'SqKm':
      return (Number(text) * 0.00000000010).toString()
    case 'SqIn':
      return (Number(text) * 0.15500031000062).toString()
    case 'SqFt':
      return (Number(text) * 0.001076391041671).toString()
    case 'SqYd':
      return (Number(text) * 0.00011959900463011).toString()
    case 'Acre':
      return (Number(text) * 0.000000024710538146717).toString()
    case 'SqMile':
      return (Number(text) * 0.000000000038610215854245).toString()
    default:
      alert('Select To Unit')
  }
}
