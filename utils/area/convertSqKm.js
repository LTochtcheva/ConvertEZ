export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 10000000000).toString()
    case 'SqM':
      return (Number(text) * 1000000).toString()
    case 'Ha':
      return (Number(text) * 100).toString()
    case 'SqKm':
      return text
    case 'SqIn':
      return (Number(text) * 1550003100.0062).toString()
    case 'SqFt':
      return (Number(text) * 10763910.41671).toString()
    case 'SqYd':
      return (Number(text) * 1195990.046).toString()
    case 'Acre':
      return (Number(text) * 247.105).toString()
    case 'SqMile':
      return (Number(text) * 0.3861).toString()
    default:
      alert('Select To Unit')
  }
}
