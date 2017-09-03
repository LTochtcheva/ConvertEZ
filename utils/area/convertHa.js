export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 100000000).toString()
    case 'SqM':
      return (Number(text) * 10000).toString()
    case 'Ha':
      return text
    case 'SqKm':
      return (Number(text) * 0.01).toString()
    case 'SqIn':
      return (Number(text) * 15500031.000062).toString()
    case 'SqFt':
      return (Number(text) * 107639.104).toString()
    case 'SqYd':
      return (Number(text) * 11959.9).toString()
    case 'Acre':
      return (Number(text) * 2.47).toString()
    case 'SqMile':
      return (Number(text) * 0.003861).toString()
    default:
      alert('Select To Unit')
  }
}
