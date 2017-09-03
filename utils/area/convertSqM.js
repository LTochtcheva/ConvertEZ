export default (text,to) => {

  switch(to) {
    case 'SqCm':
      return (Number(text) * 10000).toString()
    case 'SqM':
      return text
    case 'Ha':
      return (Number(text) * 0.0001).toString()
    case 'SqKm':
      return (Number(text) * 0.0000010).toString()
    case 'SqIn':
      return (Number(text) * 1550.0031000062).toString()
    case 'SqFt':
      return (Number(text) * 10.76391041671).toString()
    case 'SqYd':
      return (Number(text) * 1.19599).toString()
    case 'Acre':
      return (Number(text) * 0.00024710538).toString()
    case 'SqMile':
      return (Number(text) * 0.0000003861).toString()
    default:
      alert('Select To Unit')
  }
}
